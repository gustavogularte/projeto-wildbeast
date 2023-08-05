import HeaderMenu from "./modules/headerMenu.js";
import Darkmode from "./modules/darkmode.js";

const headerMenu = new HeaderMenu(
  '[data-menu="menu"]',
  '[data-menu="menuBotao"]',
);
headerMenu.init();

const darkmode = new Darkmode('[data-menu="darkmode"]');
darkmode.init();
