define([
    'csui/lib/marionette',
    'hbs!otcsw/widgets/noteview/impl/rightregion/viewertwo',
    'css!otcsw/widgets/noteview/impl/utils/headerlayout'             // Stylesheet needed for this view

],  function (Marionette, Template) {

    var ViewerTwoView = Marionette.ItemView.extend({
        className: 'viewerTwoView',
        template: Template,
        constructor: function (options){
            Marionette.ItemView.prototype.constructor.call(this,options);
        }
    });

    return ViewerTwoView;

});