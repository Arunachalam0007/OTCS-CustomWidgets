// Placeholder for the build target file; the name must be the same,
// include public modules from this component

define([
  'otcsb/widgets/hello/hello.view',
  'json!otcsb/widgets/hello/hello.manifest.json',
  'otcsb/widgets/.input.text.field/.input.text.field.view',
  'json!otcsb/widgets/.input.text.field/.input.text.field.manifest.json',
  'otcsb/widgets/expending.tile/expending.tile.view',
  'json!otcsb/widgets/expending.tile/expending.tile.manifest.json',
  'otcsb/widgets/dropdown/dropdown.view',
  'json!otcsb/widgets/dropdown/dropdown.manifest.json'
], {});

require([
  'require',
  'css'
], function (require, css) {

  // Load the bundle-specific stylesheet
  css.styleLoad(require, 'otcsb/bundles/otcsb-all');
});