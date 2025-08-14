class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <ul class = "left-list">
          <li> <a href = about.html> About Me </a> </li>
          <li> <a href = projects.html> Projects </a> </li>
          <li> <a href = experience.html> Experience </a> </li>
          <li> <a href = index.html> Home </a> </li>
        </ul>
        <ul>
          <li> <a href = resume.html> My Resume </a> </li>
          <li> <a href="mailto:autumnaustin046@gmail.com"> Email Me!</a> </li>
        </ul>
      </header>
    `;
  }
}
customElements.define('page-header', Header);
