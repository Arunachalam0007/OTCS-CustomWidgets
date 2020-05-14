define([
    'csui/lib/marionette',
    'hbs!otcsw/widgets/noteview/impl/rightregion/viewertwo',
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