import { html, css, LitElement, property, customElement } from "lit-element";

@customElement("agent-smith")
class AgentSmith extends LitElement {
    @property() name: String;

    static get styles() {
        return css`
            p{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 5em;
                background-color: black;
                color: green;
                padding: 15px;
            }
        `;
    }

    render() {
        return html`
        <p>
            Herzlich willkommen zurück, ${this.name}.
            Wir haben Sie vermisst!
        </p>`;
    }
}