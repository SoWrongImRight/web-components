class Tooltip extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    const tootlipIcon = document.createElement('span');
    tootlipIcon.textContent = '(?)';
    this.appendChild(tootlipIcon);
  }
}

customElements.define('rc-tooltip', Tooltip);