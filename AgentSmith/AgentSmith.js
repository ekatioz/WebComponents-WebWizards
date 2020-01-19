class AgentSmith extends HTMLElement {
  constructor() {
    super();

    const template = document
      .querySelector('#greeting').content;

    this.attachShadow({ mode: 'open' })
      .appendChild(template.cloneNode(true));
  }
}

customElements.define('agent-smith', AgentSmith);
