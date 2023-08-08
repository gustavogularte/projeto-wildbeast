import HeaderMenu from "./modules/headerMenu.js";
import Darkmode from "./modules/darkmode.js";
import SideNavAtivo from "./modules/sideNavAtivo.js";

const headerMenu = new HeaderMenu(
  '[data-menu="menu"]',
  '[data-menu="menuBotao"]',
);
headerMenu.init();

const darkmode = new Darkmode('[data-menu="darkmode"]');
darkmode.init();

const sideNavAtivo = new SideNavAtivo('.sidenav button');
sideNavAtivo.init();