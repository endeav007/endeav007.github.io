class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
            Copyright © 2025. All Rights Reserved. Last updated: 8/4/2025
        </footer>
    `;
  }
}
customElements.define('page-footer', Footer);
