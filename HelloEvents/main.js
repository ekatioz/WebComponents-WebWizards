const provider = document.querySelector('name-provider');
const hello = document.querySelector('hello-component');

provider.addEventListener('name-changed', (event) => {
  hello.dataset.name = event.detail.name;
});
