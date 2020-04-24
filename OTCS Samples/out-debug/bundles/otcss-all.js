csui.define('otcss/widgets/.hello/impl/.hello.model',[
  // MVC component support
  'csui/lib/backbone',
  // CS REST API URL parsing and combining
  'csui/utils/url'
], function (Backbone, Url) {
  'use strict';

  var HelloModel = Backbone.Model.extend({
    // Declare model properties with default values
    defaults: {
      name: 'Unnamed'
    },

    // Constructor gives an explicit name to the object in the debugger
    constructor: function HelloModel(attributes, options) {
      Backbone.Model.prototype.constructor.apply(this, arguments);

      // Enable this model for communication with the CS REST API
      if (options && options.connector) {
        options.connector.assignTo(this);
      }
    },

    // Computes the REST API URL using the connection options
    url: function () {
      // /auth returns information about the authenticated user
      return Url.combine(this.connector.connection.url, '/auth');
    },

    // Massage the server response, so that it looks like object attributes
    parse: function (response) {
      // All attributes are placed below the `data` key
      return response.data;
    }
  });

  return HelloModel;
});

csui.define('otcss/widgets/.hello/impl/.hello.model.factory',[
  'csui/utils/contexts/factories/factory',   // Factory base to inherit from
  'csui/utils/contexts/factories/connector', // Factory for the server connector
  'otcss/widgets/.hello/impl/.hello.model'     // Model to create the factory for
], function (ModelFactory, ConnectorFactory, HelloModel) {
  'use strict';

  var HelloModelFactory = ModelFactory.extend({
    // Unique prefix of the default model instance, when this model is placed
    // to a context to be shared by multiple widgets
    propertyPrefix: '.hello',

    constructor: function HelloModelFactory(context, options) {
      ModelFactory.prototype.constructor.apply(this, arguments);

      // Obtain the server connector from the application context to share
      // the server connection with the rest of the application; include
      // the options, which can contain settings for dependent factories
      var connector = context.getObject(ConnectorFactory, options);

      // Expose the model instance in the `property` key on this factory
      // instance to be used by the context
      this.property = new HelloModel(undefined, {
        connector: connector
      });
    },

    fetch: function (options) {
      // Just fetch the model exposed by this factory
      return this.property.fetch(options);
    }
  });

  return HelloModelFactory;
});

// Lists explicit locale mappings and fallbacks

csui.define('otcss/widgets/.hello/impl/nls/lang',{
  // Always load the root bundle for the default locale (en-us)
  "root": true,
  // Do not load English locale bundle provided by the root bundle
  "en-us": false,
  "en": false
});

// Defines localizable strings in the default language (English)

csui.define('otcss/widgets/.hello/impl/nls/root/lang',{
  helloMessage: 'Hello {0} {1}!',
  waitMessage: 'One moment, please...'
});



/* START_TEMPLATE */
csui.define('hbs!otcss/widgets/.hello/impl/.hello',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<span>"
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{}}) : helper)))
    + "</span>\r\n";
}});
Handlebars.registerPartial('otcss_widgets_.hello_impl_.hello', t);
return t;
});
/* END_TEMPLATE */
;

csui.define('css!otcss/widgets/.hello/impl/.hello',[],function(){});
// An application widget is exposed via a RequireJS module
csui.define('otcss/widgets/.hello/.hello.view',[
  'csui/lib/underscore',                           // Cross-browser utility belt
  'csui/lib/marionette',                           // MVC application support
  'otcss/widgets/.hello/impl/.hello.model.factory',  // Factory for the data model
  'i18n!otcss/widgets/.hello/impl/nls/lang',  // Use localizable texts
  'hbs!otcss/widgets/.hello/impl/.hello',            // Template to render the HTML
  'css!otcss/widgets/.hello/impl/.hello'             // Stylesheet needed for this view
], function (_, Marionette, HelloModelFactory, lang, template) {
  'use strict';

  // An application widget is a view, because it should render a HTML fragment
  var HelloView = Marionette.ItemView.extend({
    // Outermost parent element should contain a unique widget-specific class
    className: 'otcss--hello panel panel-default',

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
    constructor: function HelloView(options) {
      // Obtain the model with the data shown by this view; using the model
      // factory with the context makes the model instance not only shareable
      // with other widgets through the context, but also fetched at the same
      // moment as the other models.
      options.model = options.context.getModel(HelloModelFactory);

      // Models and collections passed via options to the parent constructor
      // are wired to
      Marionette.ItemView.prototype.constructor.call(this, options);

      // Whenever properties of the model change, re-render the view
      this.listenTo(this.model, 'change', this.render);
    }
  });

  return HelloView;
});


csui.define('json!otcss/widgets/.hello/.hello.manifest.json',{
  "$schema": "http://opentext.com/cs/json-schema/draft-04/schema#",
  "title": "Hello",
  "description": "Welcomes the current user.",
  "kind": "tile",
  "schema": {
    "type": "object",
    "properties": {}
  }
}
);

// Placeholder for the build target file; the name must be the same,
// include public modules from this component

csui.define('bundles/otcss-all',[
  'otcss/widgets/.hello/.hello.view',
  'json!otcss/widgets/.hello/.hello.manifest.json'
], {});

csui.require([
  'require',
  'css'
], function (require, css) {

  // Load the bundle-specific stylesheet
  css.styleLoad(require, 'otcss/bundles/otcss-all');
});
