'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get("/homenews", controller.home.news);


    router.get("/admin", controller.admin.index);

    router.get("/news", controller.news.index);
    router.get("/newsList/:id", controller.news.newsList)
};