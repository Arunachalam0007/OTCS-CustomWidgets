define([
  'csui/lib/jquery',
  'csui/lib/marionette',
  'csui/lib/backbone',
  'csui/utils/contexts/page/page.context',
  'hbs!otcsb/widgets/aktvconnector/impl/aktvconnector',
  'csui/controls/form/fields/nodepickerfield.view',
  'css!otcsb/widgets/aktvconnector/impl/aktvconnector',
], function ($, Marionette, Backbone, PageContext, template, NodePickerFieldView) {

  var aktvconnectorView = Marionette.ItemView.extend({
    className: 'aktv',
    template: template,
    onRender: function () {

      var pageContext = new PageContext({
        factories: {
          connector: {
            connection: {
              url: 'http://localhost/otcs/cs.exe/api/v1/',
              supportPath: 'D:\OPENTEXT\support',
              session: {
                ticket: 'dummy'
              }
            }
          }
        }
      });

      var contentRegionNodePickerField = new Marionette.Region({
        el: this.$el
      }),
        nodePickerField = new NodePickerFieldView({
          context: pageContext,
          model: new Backbone.Model({
            data: 5770,
            options: {
              type: "otcs_node_picker",
              mode: 'read',
              type_control: {
                parameters: {
                  name: "Classic 3000/3 Jet",
                  select_types: []
                }
              }
            }
          }),
          id: 'nodePickerField',
          parent: null
        });

      nodePickerField.on("field:changed", function (event) {
        //        alert(event.fieldid + ' field:changed, new value: ' + event.fieldvalue);
        console.log(event.fieldid, 'field:changed', event.fieldvalue);

      });

      contentRegionNodePickerField.show(nodePickerField);

    }
  });
  return aktvconnectorView;
});