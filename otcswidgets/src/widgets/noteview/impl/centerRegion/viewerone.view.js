define([
    'csui/lib/marionette',
    'csui/lib/backbone',
    'csui/lib/jquery',
    "csui/controls/form/fields/selectfield.view",
    "otcsw/widgets/noteview/impl/utils/Utils",
    'hbs!otcsw/widgets/noteview/impl/viewerone',
    'css!otcsw/widgets/noteview/impl/utils/headerlayout'             // Stylesheet needed for this view

], function(Marionette, Backbone, $, SelectFieldView, Utils,template) {

    var ViewerOneView = Marionette.LayoutView.extend({
        className : 'ViewerOneView',
        template: template,
        regions: {
            selectDocument: '#selectDocument'
        },
        constructor: function ViewerOneView(options){
            Marionette.LayoutView.prototype.constructor.call(this, options);
        },
        onRender: function() {
           var selectField = new SelectFieldView(Utils.getDropdownItems());
           this.showChildView('selectDocument',selectField);
         
        }
    });
    return ViewerOneView;

});