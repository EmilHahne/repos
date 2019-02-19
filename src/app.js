import {PLATFORM} from 'aurelia-pal';
import { ListReviews } from 'list-reviews';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./welcome'),      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./users'),        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./child-router'), nav: true, title: 'Child Router' },
      { route: 'movie-review',  name: 'movie-review', moduleId: PLATFORM.moduleName('./movie-review'), nav: true, title: 'Film recension' },
      { route: "listreviews",   name: "listreviews",  moduleId: PLATFORM.moduleName("./list-reviews"), nav: true, title: "Recension lista"}
    ]);

    this.appRouter = router;
  }
}
