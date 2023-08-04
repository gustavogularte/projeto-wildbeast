import HeaderMenu from "./modules/headerMenu.js";

const headerMenu = new HeaderMenu(
  '[data-menu="menu"]',
  '[data-menu="menuBotao"]',
);
headerMenu.init();