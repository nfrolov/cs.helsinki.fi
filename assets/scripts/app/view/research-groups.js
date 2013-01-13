define(['backbone', 'mustache', 'text!app/template/research-groups.htm'], function (Backbone, Mustache, template) {
    return Backbone.View.extend({
        template: template,
        initialize: function () {
            this.model.bind('add reset', this.render, this);
            this.render();
        },
        render: function () {
            this.$el.html(Mustache.render(this.template, { groups: this.model.toJSON() }));
            return this;
        }
    });
});
