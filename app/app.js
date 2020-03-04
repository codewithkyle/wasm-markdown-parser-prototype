const rust = import('../pkg/rust_demo');
import './vars.css';
import './app.css';

const preview = document.body.querySelector('#output');
const input = document.body.querySelector('#input');
const rawPreview = document.body.querySelector('#output-raw');
let outputType = 'text';

rust.then(module => {
    input.addEventListener('focus', () => {
        if (input.value === 'Start typing to begin'){
            input.value = '';
        }
    });
    input.addEventListener('blur', () => {
        if (input.value === ''){
            input.value = 'Start typing to begin';
        }
    });
    input.addEventListener('keyup', () => {
        if (input.value !== 'Start typing to begin') {
            let result = module.parse(input.value);
            switch (outputType){
                case 'html':
                    rawPreview.value = result;
                    break;
                default:
                    preview.innerHTML = result;
                    break;
            }
        }
    });
});

document.body.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
        outputType = e.currentTarget.value;
        switch (outputType){
            case 'html':
                rawPreview.value = preview.innerHTML;
                rawPreview.style.display = 'inline-block';
                preview.style.display = 'none';
                break;
            default:
                preview.innerHTML = rawPreview.value;
                rawPreview.style.display = 'none';
                preview.style.display = 'inline-block';
                break;
        }
    });
});
