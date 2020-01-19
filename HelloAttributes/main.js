const hello = document.querySelector('hello-component');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  hello.dataset.name = input.value;
});
