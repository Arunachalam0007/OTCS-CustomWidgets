// An application widget is exposed via a RequireJS module
define([
  'csui/lib/underscore',                           // Cross-browser utility belt
  'csui/lib/marionette',                           // MVC application support
  'otcsb/widgets/dialogbox/impl/dialogbox.model.factory',  // Factory for the data model
  'i18n!otcsb/widgets/dialogbox/impl/nls/lang',  // Use localizable texts
  'hbs!otcsb/widgets/dialogbox/impl/dialogbox',            // Template to render the HTML
  'css!otcsb/widgets/dialogbox/impl/dialogbox'             // Stylesheet needed for this view
], function (_, Marionette, DialogboxModelFactory, lang, template) {
  'use strict';

  // An application widget is a view, because it should render a HTML fragment
  var DialogboxView = Marionette.ItemView.extend({
    // Outermost parent element should contain a unique widget-specific class
    className: 'otcsb--dialogbox panel panel-default',

    // Template method rendering the HTML for the view
    template: template,

    // Mix additional properties in the template input data
    templateHelpers: function () {
      // Say hello to the authenticated user, if the model has been fetched,
      // otherwise show a waiting message
      var message = this.model.get('id') ?
                    _.str.sformat(lang.helloMessage,
                        this.model.get('first_name'),
                        this.model.get('last_name')) :
                    lang.waitMessage;
      return {
        message: message
      };
    },

    // Constructor gives an explicit name to the object in the debugger and
    // can update the options for the parent view, which `initialize` cannot
    constructor: function DialogboxView(options) {
      // Obtain the model with the data shown by this view; using the model
      // factory with the context makes the model instance not only shareable
      // with other widgets through the context, but also fetched at the same
      // moment as the other models.
      options.model = options.context.getModel(DialogboxModelFactory);

      // Models and collections passed via options to the parent constructor
      // are wired to
      Marionette.ItemView.prototype.constructor.call(this, options);

      // Whenever properties of the model change, re-render the view
      this.listenTo(this.model, 'change', this.render);
    }
  });

  return DialogboxView;
});
