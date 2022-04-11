class InfoToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
       #info {
         display: none
       }
      </style>      
      <button></button>
      <p id="info">
        <slot></slot>
      </p>
    `;
    this._openState = "false";
    this._hideButton = this.shadowRoot.querySelector('button');
    this._hiddenTextContainer = this.shadowRoot.querySelector('#info');
    this._hideButton.textContent = this._openState ? 'Show' : 'Hide'
    this.shadowRoot.append(this._hiddenTextContainer);
    this._hideButton.addEventListener('click', this._onClick.bind(this));
  };

  connectedCallback() {
    if (this.hasAttribute('isVisible')) {
      this._openState = this.getAttribute('isVisible');
    }
  }
  
  _onClick() {
    this._openState = !this._openState;
    this._hiddenTextContainer.style.display = this._openState ? 'block' : 'none';
    this._hideButton.textContent = this._openState ? 'Hide' : 'Show';
  }
}

customElements.define('rc-info-toggle', InfoToggle);