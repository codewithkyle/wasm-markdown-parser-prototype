const rust = import('../pkg/rust_demo');
import './vars.css';
import './app.css';

const preview = document.body.querySelector('#output');
const input = document.body.querySelector('#input');

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
            preview.innerHTML = module.parse(input.value);
        }
    });
});