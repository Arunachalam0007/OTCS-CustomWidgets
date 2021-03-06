csui.require.config({
  bundles: {
'csui/bundles/csui-error': [
  'csui/lib/backbone',
  'csui/lib/jquery.3.4.1',
  'csui/lib/jquery',
  'csui/lib/jquery.binary.ajax',
  'csui/lib/jquery.mockjax',
  'csui/lib/jquery.parse.param',
  'csui/pages/error.page/error.page.view'
],
'csui/bundles/csui-sprite-carbonfiber': [
  'csui/themes/carbonfiber/svg_sprites/symbol/sprite'
],
'csui/bundles/csui-sprite-controls': [
  'csui/controls/svg_sprites/symbol/sprite',
  'csui/widgets/svg_sprites/symbol/sprite'
],
'csui/bundles/csui-spriteloader-carbonfiber': [
  'csui/themes/carbonfiber/svg_sprites/symbol/spriteLoader'
],
'csui/bundles/csui-spriteloader-controls': [
  'csui/controls/svg_sprites/symbol/spriteLoader',
  'csui/widgets/svg_sprites/symbol/spriteLoader'
]
  }
});