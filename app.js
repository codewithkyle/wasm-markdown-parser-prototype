const rust = import('./pkg/rust_demo');

const preview = document.body.querySelector('#output');
const input = document.body.querySelector('#input');

rust.then(module => {
    input.addEventListener('keyup', () => {
        preview.innerHTML = module.parse(input.value);
    });
});