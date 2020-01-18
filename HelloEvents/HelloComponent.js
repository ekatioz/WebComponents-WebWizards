class HelloComponent extends HTMLElement {
    static get observedAttributes() {
        return ["data-name"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.innerText = `Hello ${newValue}!`;
    }
}

customElements.define("hello-component", HelloComponent);
