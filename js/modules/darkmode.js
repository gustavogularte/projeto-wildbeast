export default class Darkmode {
  constructor(darkmodeButton) {
    this.darkmodeButton = document.querySelector(darkmodeButton);
    this.body = document.querySelector('body');

    this.ativarDarkmode = this.ativarDarkmode.bind(this);
  }

  ativarDarkmode() {
    this.body.classList.toggle('darkTheme');
  }

  addEvent() {
    this.darkmodeButton.addEventListener('click', this.ativarDarkmode);
  }

  init() {
    if (this.darkmodeButton) {
      this.addEvent();
    }
  }
}