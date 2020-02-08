const template = (from, to) => {
    let html = "";
    for (let i = from; i <= to; i++) {
        html += `<p>${i}</p>`
    }
    return html;
}

class CountUp extends HTMLElement {

    static get observedAttributes() {
        return ['data-from', 'data-to'];
    }

    attributeChangedCallback() {
        this.innerHTML = template(this.from, this.to);
    }

    get from() {
        return parseInt(this.dataset.from);
    }

    set from(newValue) {
        this.dataset.from = parseInt(newValue);
    }

    get to() {
        return parseInt(this.dataset.to);
    }

    set from(newValue) {
        this.dataset.from = parseInt(newValue);
    }
}

customElements.define('count-up', CountUp);
