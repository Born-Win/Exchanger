import '../../css/home/index.css';
import { HomeController } from './controller';
import { HomeView } from './view';
import { HomeModel } from './model';

$(document).ready(function () {
  const homeView = new HomeView();
  const homeModel = new HomeModel();

  const homeController = new HomeController(homeView, homeModel);
  homeController.init();
});