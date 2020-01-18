const template = `
            <label>Name:
                <input>
                <button>Klick</button>
            </label>
        `

class NameProvider extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = template;
        const button = this.querySelector("button");
        const input = document.querySelector("input");

        button.addEventListener("click", () =>
            this.dispatchEvent(
                new CustomEvent("name-changed", {
                    detail: { name: input.value }
                })));
    }
}

customElements.define("name-provider", NameProvider);