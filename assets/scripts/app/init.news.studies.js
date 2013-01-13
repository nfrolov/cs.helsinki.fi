define(
    ['text!app/data/news.studies.json', 'app/model/news', 'app/view/news.studies'],
    function (data, News, NewsView) {
        var news = new News();

        data = JSON.parse(data);
        news.reset(data);

        return function (node) {
            new NewsView({
                el: node,
                model: news
            });
        };
    }
);
