define(
    ['text!app/data/research-groups.json', 'app/model/research-groups', 'app/view/research-groups'],
    function (data, ResearchGroups, ResearchGroupsView) {
        var groups = new ResearchGroups();

        data = JSON.parse(data);
        groups.reset(data);

        return function (node) {
            new ResearchGroupsView({
                el: node,
                model: groups
            });
        };
    }
);
