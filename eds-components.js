class EdsComponents extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = this.template;
  }

  get template() {
    return `
      <div>Emotive Design System</div>
    `;
  }
}
window.customElements.define('eds-components', EdsComponents);
