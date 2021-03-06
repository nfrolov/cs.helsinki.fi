require.config({
    shim: {
        underscore: { exports: '_' },
        backbone: { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        mustache: { exports: 'Mustache' }
    }
});

require(['jquery'], function ($) {
    $('#stories').each(function () {
        var el = this;
        require(['app/init.stories'], function (init) {
            init(el);
        });
    });
    $('#news').each(function () {
        var el = this;
        require(['app/init.news'], function (init) {
            init(el);
        });
    });
    $('#news-studies').each(function () {
        var el = this;
        require(['app/init.news.studies'], function (init) {
            init(el);
        });
    });
    $('#research-groups').each(function () {
        var el = this;
        require(['app/init.research-groups'], function (init) {
            init(el);
        });
    });
});
