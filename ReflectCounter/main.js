const fromInput = document.querySelector("#from");
const toInput = document.querySelector("#to");
const counter = document.querySelector("count-up");

fromInput.value = counter.from; //Property
toInput.value = counter.getAttribute("data-to"); //Attribute


fromInput.addEventListener("change",
    () => counter.from = fromInput.value); //Property
toInput.addEventListener("change",
    () => counter.dataset.to = toInput.value); //Attribute