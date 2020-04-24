// Placeholder for the build target file; the name must be the same,
// include public modules from this component

define([
  'otcss/widgets/.hello/.hello.view',
  'json!otcss/widgets/.hello/.hello.manifest.json'
], {});

require([
  'require',
  'css'
], function (require, css) {

  // Load the bundle-specific stylesheet
  css.styleLoad(require, 'otcss/bundles/otcss-all');
});