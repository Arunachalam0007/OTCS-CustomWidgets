define([
  'csui/utils/contexts/factories/factory',   // Factory base to inherit from
  'csui/utils/contexts/factories/connector', // Factory for the server connector
  'otcsb/widgets/dropdown/impl/dropdown.model'     // Model to create the factory for
], function (ModelFactory, ConnectorFactory, DropdownModel) {
  'use strict';

  var DropdownModelFactory = ModelFactory.extend({
    // Unique prefix of the default model instance, when this model is placed
    // to a context to be shared by multiple widgets
    propertyPrefix: 'dropdown',

    constructor: function DropdownModelFactory(context, options) {
      ModelFactory.prototype.constructor.apply(this, arguments);

      // Obtain the server connector from the application context to share
      // the server connection with the rest of the application; include
      // the options, which can contain settings for dependent factories
      var connector = context.getObject(ConnectorFactory, options);

      // Expose the model instance in the `property` key on this factory
      // instance to be used by the context
      this.property = new DropdownModel(undefined, {
        connector: connector
      });
    },

    fetch: function (options) {
      // Just fetch the model exposed by this factory
      return this.property.fetch(options);
    }
  });

  return DropdownModelFactory;
});
