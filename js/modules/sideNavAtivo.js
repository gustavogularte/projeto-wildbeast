export default class SideNavAtivo {
  constructor(sideNavButton) {
    this.sideNavButtons = document.querySelectorAll(sideNavButton);

    this.ativo = this.ativo.bind(this);
  }

  ativo({currentTarget}) {
    this.sideNavButtons.forEach((button) => {
      button.classList.remove('ativo');
    })
    currentTarget.classList.add('ativo');
  }

  addEvent() {
    this.sideNavButtons.forEach((button) => {
      button.addEventListener('click', this.ativo)
    })
  }

  init() {
    if (this.sideNavButtons) {
      this.addEvent();
    }
  }
}