// An application widget is exposed via a RequireJS module
define([
  'csui/lib/underscore',                           // Cross-browser utility belt
  'csui/lib/jquery',
  'csui/lib/marionette',                           // MVC application support
  'csui/lib/backbone',
  "csui/controls/form/fields/selectfield.view",
  'hbs!otcsb/widgets/dropdown/impl/dropdown',            // Template to render the HTML
  'css!otcsb/widgets/dropdown/impl/dropdown'             // Stylesheet needed for this view
], function (_, $, Marionette, Backbone, SelectFieldView, template) {

  var DropdownView = Marionette.ItemView.extend({
    className: 'shaDropDown',
    template: template,
    onRender: function () {
      var DropDownContentRegion = new Marionette.Region({
        el: this.$el
      });
      var DropView = new SelectFieldView({
        id: 'shaSelecedFieldView',
        collection: new Backbone.Collection([
          {
            id: 0,
            name: 'EFILE'
          },
          {
            id: 1,
            name: 'ECASE'
          },
        ]),
        model: new Backbone.Model({
          options: {
            isMultiFieldItem: false,
            selected: true,
            mode: 'read' // 'read', 'readonly', 'writeonly' ?
          }
        }),
        mode: 'read',
        alpaca: {
          schema: {
            title: "URL",
            type: "string",
          },
          options: {
            setRequiredFieldsEditable: false
          }
        }
      });
      DropView.on("field:changed", function (event) {
        //alert(event.fieldid + ' field:changed, new value: ' + event.fieldvalue);
        console.log(event.fieldid, 'field:changed', event.fieldvalue);
      });
      DropDownContentRegion.show(DropView);
    }
  });
  return DropdownView;
});
