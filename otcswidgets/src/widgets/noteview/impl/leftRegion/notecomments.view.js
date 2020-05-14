define([
    'csui/lib/marionette',
    'csui/lib/backbone',
    'csui/lib/jquery',
    'csui/controls/rich.text.editor/rich.text.editor',
    "csui/controls/form/fields/selectfield.view",
    'hbs!otcsw/widgets/noteview/impl/notecomments',
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