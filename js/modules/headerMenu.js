export default class HeaderMenu {
  constructor(menu, menuBotao, menuLinks) {
    this.menu = document.querySelector(menu);
    this.menuBotao = document.querySelector(menuBotao);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('ativo');
    if (this.menu.classList.contains("ativo")) {
      this.menuBotao.setAttribute('aria-expanded', true);
    } else {
      this.menuBotao.setAttribute('aria-expanded', false);
    }
  }

  addEvent() {
    this.menuBotao.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.menuBotao) {
      this.addEvent();
      this.ariaExpandedToggle();
    }
  }
}
