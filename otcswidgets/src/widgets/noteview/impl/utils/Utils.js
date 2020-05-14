define([
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
