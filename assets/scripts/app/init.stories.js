define(
    ['text!app/data/stories.json', 'app/model/stories', 'app/view/stories'],
    function (data, Stories, StoriesView) {
        var stories = new Stories();

        data = JSON.parse(data);
        stories.reset(data);

        return function (node) {
            new StoriesView({
                el: node,
                model: stories
            });
        };
    }
);
