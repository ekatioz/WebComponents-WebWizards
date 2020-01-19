import { html, css, LitElement } from 'lit-element';

class AgentSmith extends LitElement {
  static get properties() {
    return { name: { type: String } };
  }

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

customElements.define('agent-smith', AgentSmith);
