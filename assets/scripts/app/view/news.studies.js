define(['backbone', 'mustache', 'text!app/template/news.studies.htm', 'app/view/news'], function (Backbone, Mustache, template, NewsView) {
    return NewsView.extend({
        template: template,
    });
});
