define(
    ['text!app/data/news.json', 'app/model/news', 'app/view/news'],
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
