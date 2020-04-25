define([
  'csui/lib/underscore',
  'csui/lib/jquery',
  'csui/lib/backbone',
  'csui/lib/marionette',
  'csui/controls/tile/tile.view',
  'csui/controls/tile/behaviors/expanding.behavior',
  'hbs!otcsb/widgets/expending.tile/impl/expending.tile',
  'hbs!otcsb/widgets/expending.tile/impl/childTemplate',
  'css!otcsb/widgets/expending.tile/impl/expending.tile'
],function (_,$,Backbone,Marionette,TileView,ExpandingBehavior,ExpendingTemplate,ChildTemplate){

  var ContentView = Marionette.view.extend({
    className : 'myContent-View',
    el: this.$el,
    onRender: function (){
      var subView = Marionette.ItemView.extend({
        className: 'myItem-View',
        template:ChildTemplate,
      });
      var contentRegion1 = new Marionette.Region({
        el:this.$el
      });
      contentRegion1.show(new subView());
    }
  }); 

  var ExpandingTileView = TileView.extend({
    icon: 'title-recentlyaccessed',
    className: 'ExpandingTile',
    title: 'Sample Expandable Tile',
    contentView: ContentView,
    behaviors: {
      Expanding: {
        behaviorClass: ExpandingBehavior,
        expandedView: ContentView,
        titleBarIcon: 'title-recentlyaccessed',
        dialogTitle: 'Expandable Tile'
      }
    }
  });

  return ExpandingTileView;
});