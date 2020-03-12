struct Parser {
    pos: usize,
    input: String,
    list_open: bool,
    list_type: u8,
}

pub fn parse(source: String) -> String {
    Parser {
        pos: 0,
        input: source,
        list_open: false,
        list_type: 0,
    }
    .parse_lines()
}

impl Parser {
    fn parse_lines(&mut self) -> String {
        let mut result = String::new();
        loop {
            self.consume_whitespace();
            if self.end_of_line() {
                break;
            }
            result.push_str(&self.parse_line());
        }
        if self.list_open {
            result.push_str(&self.close_list())
        }
        result
    }

    fn parse_line(&mut self) -> String {
        match self.next_char() {
            '#' => self.parse_title(),
            '-' => {
                if !self.list_open {
                    self.list_open = true;
                    self.list_type = 1;
                    return open_html_element("ul".to_string());
                } else if self.list_open && self.list_type != 1 {
                    return self.close_list();
                }
                return self.parse_list();
            }
            x if x.is_numeric() => {
                if !self.list_open {
                    self.list_open = true;
                    self.list_type = 2;
                    return open_html_element("ol".to_string());
                } else if self.list_open && self.list_type != 2 {
                    return self.close_list();
                }
                return self.parse_ordered_list();
            }
            _ => {
                if self.list_open {
                    return self.close_list();
                }
                return self.parse_paragraph();
            }
        }
    }

    fn parse_paragraph(&mut self) -> String {
        let result = self.consume_while(|c| !is_newline(c));
        create_html_element("p".to_string(), result)
    }

    fn parse_ordered_list(&mut self) -> String {
        self.consume_char();
        self.consume_while(|c| c != '.');
        self.consume_char();
        if self.next_char().is_whitespace() {
            self.consume_whitespace();
        }
        let text = self.parse_text();
        create_html_element("li".to_string(), text)
    }

    fn close_list(&mut self) -> String {
        self.list_open = false;
        match self.list_type {
            1 => return close_html_element("ul".to_string()),
            _ => return close_html_element("ol".to_string()),
        };
    }

    fn parse_list(&mut self) -> String {
        self.consume_char();
        if self.next_char().is_whitespace() {
            self.consume_whitespace();
        }
        let text = self.parse_text();
        create_html_element("li".to_string(), text)
    }

    fn parse_title(&mut self) -> String {
        let pound = self.consume_while(|c| c == '#');
        self.consume_whitespace();
        let text = self.parse_text();
        let mut heading = pound.len();
        if heading > 6 {
            heading = 6;
        }

        create_html_element(format!("h{}", heading), text)
    }

    fn parse_text(&mut self) -> String {
        self.consume_while(|c| !is_newline(c))
    }

    fn end_of_line(&self) -> bool {
        self.pos >= self.input.len()
    }

    fn next_char(&self) -> char {
        self.input[self.pos..].chars().next().unwrap()
    }

    fn consume_char(&mut self) -> char {
        let mut iter = self.input[self.pos..].char_indices();
        let (_, cur_char) = iter.next().unwrap();
        let (next_pos, _) = iter.next().unwrap_or((1, ' '));
        self.pos += next_pos;
        cur_char
    }

    fn consume_while<F>(&mut self, cond: F) -> String
    where
        F: Fn(char) -> bool,
    {
        let mut result = String::new();
        while !self.end_of_line() && cond(self.next_char()) {
            result.push(self.consume_char());
        }

        result
    }

    fn consume_whitespace(&mut self) {
        self.consume_while(char::is_whitespace);
    }
}

fn create_html_element(tag_name: String, text: String) -> String {
    format!("<{}>{}</{}>\n", tag_name, text, tag_name)
}

fn open_html_element(tag_name: String) -> String {
    format!("<{}>\n", tag_name)
}

fn close_html_element(tag_name: String) -> String {
    format!("</{}>\n", tag_name)
}

// fn create_self_closing_html_element(tag_name: String) -> String {
//     format!("<{}/>\n", tag_name)
// }

fn is_newline(c: char) -> bool {
    c == '\n'
}
