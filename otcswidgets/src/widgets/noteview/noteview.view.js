define([
  'csui/lib/underscore',                           // Cross-browser utility belt
  'csui/lib/marionette',                           // MVC application support
  'otcsw/widgets/noteview/impl/noteview.model.factory', 
  'otcsw/widgets/noteview/impl/leftRegion/notecomments.view',
  'otcsw/widgets/noteview/impl/centerRegion/viewerone.view',
  'otcsw/widgets/noteview/impl/rightregion/viewertwo.view',
  'i18n!otcsw/widgets/noteview/impl/nls/lang', 
  'hbs!otcsw/widgets/noteview/impl/noteview',            // Template to render the HTML
  'css!otcsw/widgets/noteview/impl/noteview'             // Stylesheet needed for this view
], function (_, Marionette, NoteviewModelFactory, NoteCommentsView, ViewerOneView, ViewerTwoView , lang, template) {
  'use strict';

  var NoteviewView = Marionette.LayoutView.extend({
    className: 'otcsw--noteview panel panel-default',

    template: template,
    regions: {
      leftRegion: '#leftRegion',
      centerRegion: '#centerRegion',
      rightRegion: '#rightRegion'
    },

    constructor: function NoteviewView(options) {
      Marionette.LayoutView.prototype.constructor.call(this, options);

    },
    onRender: function() {
      this.showChildView('leftRegion', new NoteCommentsView());
      this.showChildView('centerRegion', new ViewerOneView());
      this.showChildView('rightRegion', new ViewerTwoView());
    }
  });

  return NoteviewView;
});
