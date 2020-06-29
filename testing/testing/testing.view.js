// An application widget is exposed via a RequireJS module
define([
  "csui/lib/underscore", // Cross-browser utility belt
  "csui/lib/marionette", // MVC application support
  "csui/lib/jquery",
  "otcsw/widgets/testing/impl/testing.model.factory", // Factory for the data model
  "i18n!otcsw/widgets/testing/impl/nls/lang", // Use localizable texts
  "hbs!otcsw/widgets/testing/impl/testing", // Template to render the HTML
  "hbs!otcsw/widgets/testing/impl/left",
  "hbs!otcsw/widgets/testing/impl/right",
  "css!otcsw/widgets/testing/impl/testing", // Stylesheet needed for this view
], function (_, Marionette, $, TestingModelFactory, lang, template, lefttemplate, Righttemplate) {
  "use strict";
  var LeftView =  Marionette.ItemView.extend({
    className: "otcsw--left panel panel-default",
    template: lefttemplate,
  });

  var RightView =  Marionette.ItemView.extend({
    className: "otcsw--right panel panel-default",
    template: Righttemplate,
  });

  var TestingView = Marionette.LayoutView.extend({
    className: "otcsw--testing panel panel-default",
    template: template,
    regions: {
      leftRegion: '#leftRegion',
      rightRegion: '#rightRegion'
    },
    ui: {
      button: ".myCollapseBtn",
    },
    events: {
      "click @ui.button": "onClickedButton",
    },
    onClickedButton: function(){
      this.$('.column2').toggle();
  
      //this.$( ".otcsw--testing panel panel-default" ).removeClass( this.$(".column2") );

      //  this.$('.otcsw--left panel panel-default').toggleClass( className, addOrRemove );
      //   if ( addOrRemove ) {
      //     $( "#" ).addClass( className );
      //   } else {
      //     $( "#foo" ).removeClass( className );
      //   }
    },
    onRender: function() {
      this.showChildView('leftRegion', new LeftView());
      this.showChildView('rightRegion', new RightView());
    }
  });

  return TestingView;
});
