csui.define('otcsw/widgets/noteview/impl/noteview.model',[
  // MVC component support
  'csui/lib/backbone',
  // CS REST API URL parsing and combining
  'csui/utils/url'
], function (Backbone, Url) {
  'use strict';

  var NoteviewModel = Backbone.Model.extend({
    // Declare model properties with default values
    defaults: {
      name: 'Unnamed'
    },

    // Constructor gives an explicit name to the object in the debugger
    constructor: function NoteviewModel(attributes, options) {
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

  return NoteviewModel;
});

csui.define('otcsw/widgets/noteview/impl/noteview.model.factory',[
  'csui/utils/contexts/factories/factory',   // Factory base to inherit from
  'csui/utils/contexts/factories/connector', // Factory for the server connector
  'otcsw/widgets/noteview/impl/noteview.model'     // Model to create the factory for
], function (ModelFactory, ConnectorFactory, NoteviewModel) {
  'use strict';

  var NoteviewModelFactory = ModelFactory.extend({
    // Unique prefix of the default model instance, when this model is placed
    // to a context to be shared by multiple widgets
    propertyPrefix: 'noteview',

    constructor: function NoteviewModelFactory(context, options) {
      ModelFactory.prototype.constructor.apply(this, arguments);

      // Obtain the server connector from the application context to share
      // the server connection with the rest of the application; include
      // the options, which can contain settings for dependent factories
      var connector = context.getObject(ConnectorFactory, options);

      // Expose the model instance in the `property` key on this factory
      // instance to be used by the context
      this.property = new NoteviewModel(undefined, {
        connector: connector
      });
    },

    fetch: function (options) {
      // Just fetch the model exposed by this factory
      return this.property.fetch(options);
    }
  });

  return NoteviewModelFactory;
});


/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/noteview/impl/notecomments',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2 id=\"title-header\">View Document One</h2>\r\n<h1>Hello Vashisht</h1>";
}});
Handlebars.registerPartial('otcsw_widgets_noteview_impl_notecomments', t);
return t;
});
/* END_TEMPLATE */
;

csui.define('css!otcsw/widgets/noteview/impl/utils/headerlayout',[],function(){});
csui.define('otcsw/widgets/noteview/impl/leftRegion/notecomments.view',[
    'csui/lib/marionette',
    'csui/lib/backbone',
    'csui/lib/jquery',
    'csui/controls/rich.text.editor/rich.text.editor',
    "csui/controls/form/fields/selectfield.view",
    'hbs!otcsw/widgets/noteview/impl/notecomments',
    'css!otcsw/widgets/noteview/impl/utils/headerlayout'             // Stylesheet needed for this view

], function(Marionette, Backbone, $, RichTextEditor, SelectFieldView, template) {

    var NoteCommentsView = Marionette.ItemView.extend({
        className: 'NoteComments',
        template: template,
        constructor: function NoteCommentsView(options) {
            Marionette.ItemView.prototype.constructor.call(this, options);
        },
        onRender: function() {
            
        }


    });
    return NoteCommentsView;
});
csui.define('otcsw/widgets/noteview/impl/utils/Utils',[
  'csui/lib/backbone'
],function(Backbone) {
    var Utils = {
        getDropdownItems: function() {
        return {
            id: "selectField",
            collection: new Backbone.Collection({'id':1,name:'vashisht'}),
            model: new Backbone.Model({
              options: {
                isMultiFieldItem: false,
                selected: true,
                mode: "read", // 'read', 'readonly', 'writeonly' ?
              },
            }),
            mode: "read",
            alpaca: {
              schema: {
                title: "URL",
                type: "string",
              },
              options: {
                setRequiredFieldsEditable: false,
              },
            },
          };
    }};
    return Utils;
    
});


/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/noteview/impl/viewerone',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2 id=\"title-header\">View Document Two</h2>\r\n<div class = \"flex-containers\">\r\n    <div class=\"selectDocument-fieldname\">SelectDocument:  </div>\r\n    <div id=\"selectDocument\"></div>\r\n</div>\r\n<div id=\"viewer\"></div>";
}});
Handlebars.registerPartial('otcsw_widgets_noteview_impl_viewerone', t);
return t;
});
/* END_TEMPLATE */
;
csui.define('otcsw/widgets/noteview/impl/centerRegion/viewerone.view',[
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

/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/noteview/impl/rightregion/viewertwo',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2 id=\"title-header\">View Document Three</h2>\r\n<h1>Hello Arun</h1>";
}});
Handlebars.registerPartial('otcsw_widgets_noteview_impl_rightregion_viewertwo', t);
return t;
});
/* END_TEMPLATE */
;
csui.define('otcsw/widgets/noteview/impl/rightregion/viewertwo.view',[
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
// Lists explicit locale mappings and fallbacks

csui.define('otcsw/widgets/noteview/impl/nls/lang',{
  // Always load the root bundle for the default locale (en-us)
  "root": true,
  // Do not load English locale bundle provided by the root bundle
  "en-us": false,
  "en": false
});

// Defines localizable strings in the default language (English)

csui.define('otcsw/widgets/noteview/impl/nls/root/lang',{
  helloMessage: 'Hello {0} {1}!',
  waitMessage: 'One moment, please...'
});



/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/noteview/impl/noteview',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n    <div class =\"flex-container\">\r\n        <div class=\"column1\" id=\"leftRegion\">one</div>\r\n        <div class=\"column2\" id=\"centerRegion\">two</div>\r\n        <div class=\"column3\" id=\"rightRegion\">three</div>\r\n    </div>\r\n</div>";
}});
Handlebars.registerPartial('otcsw_widgets_noteview_impl_noteview', t);
return t;
});
/* END_TEMPLATE */
;

csui.define('css!otcsw/widgets/noteview/impl/noteview',[],function(){});
csui.define('otcsw/widgets/noteview/noteview.view',[
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


csui.define('json!otcsw/widgets/noteview/noteview.manifest.json',{
  "$schema": "http://opentext.com/cs/json-schema/draft-04/schema#",
  "title": "noteview",
  "description": "Welcomes the current user.",
  "kind": "fullpage",
  "schema": {
    "type": "object",
    "properties": {}
  }
}
);

csui.define('otcsw/widgets/testing/impl/testing.model',[
  // MVC component support
  'csui/lib/backbone',
  // CS REST API URL parsing and combining
  'csui/utils/url'
], function (Backbone, Url) {
  'use strict';

  var TestingModel = Backbone.Model.extend({
    // Declare model properties with default values
    defaults: {
      name: 'Unnamed'
    },

    // Constructor gives an explicit name to the object in the debugger
    constructor: function TestingModel(attributes, options) {
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

  return TestingModel;
});

csui.define('otcsw/widgets/testing/impl/testing.model.factory',[
  'csui/utils/contexts/factories/factory',   // Factory base to inherit from
  'csui/utils/contexts/factories/connector', // Factory for the server connector
  'otcsw/widgets/testing/impl/testing.model'     // Model to create the factory for
], function (ModelFactory, ConnectorFactory, TestingModel) {
  'use strict';

  var TestingModelFactory = ModelFactory.extend({
    // Unique prefix of the default model instance, when this model is placed
    // to a context to be shared by multiple widgets
    propertyPrefix: 'testing',

    constructor: function TestingModelFactory(context, options) {
      ModelFactory.prototype.constructor.apply(this, arguments);

      // Obtain the server connector from the application context to share
      // the server connection with the rest of the application; include
      // the options, which can contain settings for dependent factories
      var connector = context.getObject(ConnectorFactory, options);

      // Expose the model instance in the `property` key on this factory
      // instance to be used by the context
      this.property = new TestingModel(undefined, {
        connector: connector
      });
    },

    fetch: function (options) {
      // Just fetch the model exposed by this factory
      return this.property.fetch(options);
    }
  });

  return TestingModelFactory;
});

// Lists explicit locale mappings and fallbacks

csui.define('otcsw/widgets/testing/impl/nls/lang',{
  // Always load the root bundle for the default locale (en-us)
  "root": true,
  // Do not load English locale bundle provided by the root bundle
  "en-us": false,
  "en": false
});

// Defines localizable strings in the default language (English)

csui.define('otcsw/widgets/testing/impl/nls/root/lang',{
  helloMessage: 'Hello {0} {1}!',
  waitMessage: 'One moment, please...'
});



/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/testing/impl/testing',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n    <div class=\"column1\" id=\"leftRegion\"></div>\r\n    <div class=\"column2\" id=\"rightRegion\">Teja</div>\r\n</div>";
}});
Handlebars.registerPartial('otcsw_widgets_testing_impl_testing', t);
return t;
});
/* END_TEMPLATE */
;

/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/testing/impl/left',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>hello</h1>\r\n<button class=\"myCollapseBtn\" id=\"left\">Collapse</button>\r\n";
}});
Handlebars.registerPartial('otcsw_widgets_testing_impl_left', t);
return t;
});
/* END_TEMPLATE */
;

/* START_TEMPLATE */
csui.define('hbs!otcsw/widgets/testing/impl/right',['module','hbs','csui/lib/handlebars'], function( module, hbs, Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1 id=\"right\">hello</h1>";
}});
Handlebars.registerPartial('otcsw_widgets_testing_impl_right', t);
return t;
});
/* END_TEMPLATE */
;

csui.define('css!otcsw/widgets/testing/impl/testing',[],function(){});
// An application widget is exposed via a RequireJS module
csui.define('otcsw/widgets/testing/testing.view',[
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
      this.$('.column1').toggle();
  
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


csui.define('json!otcsw/widgets/testing/testing.manifest.json',{
  "$schema": "http://opentext.com/cs/json-schema/draft-04/schema#",
  "title": "testing",
  "description": "Welcomes the current user.",
  "kind": "fullpage",
  "schema": {
    "type": "object",
    "properties": {}
  }
}
);

// Placeholder for the build target file; the name must be the same,
// include public modules from this component

csui.define('bundles/otcsw-all',[
  // add public files for this module here
  'otcsw/widgets/noteview/noteview.view',
  'json!otcsw/widgets/noteview/noteview.manifest.json',
  "otcsw/widgets/testing/testing.view",
  'json!otcsw/widgets/testing/testing.manifest.json',
], {});

csui.require([
  'require',
  'css'
], function (require, css) {
  // Load the bundle-specific stylesheet
  css.styleLoad(require, 'otcsw/bundles/otcsw-all');
});

