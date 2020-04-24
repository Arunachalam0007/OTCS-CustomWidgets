define([
  'csui/lib/underscore',                           // Cross-browser utility belt
  'csui/lib/marionette',
  'csui/lib/backbone',
  'csui/lib/jquery',
  'csui/controls/form/fields/textfield.view',   //  text field
  'hbs!otcsb/widgets/.input.text.field/impl/.input.text.field',                        // MVC application support
  'css!otcsb/widgets/.input.text.field/impl/.input.text.field',
  
],
  function (_, Marionette,Backbone,$,TextFieldView, template) {
    var textfieldView = Marionette.ItemView.extend({

      className: 'otcsb--input-text-field',
      template: template,
      onRender: function (){
        var model = new Backbone.Model({ data: 'First Name' }),
        contentRegion = new Marionette.Region({el: this.$el}),
        field = new TextFieldView({ 
          id: 'firstName',
          model: model 
        });
    
    field.on("field:changed", function (event) {
        alert(event.fieldid + ' field:changed, new value: ' + event.fieldvalue);
    });
    
    contentRegion.show(field);
    }
    });
    return textfieldView;
  }
);