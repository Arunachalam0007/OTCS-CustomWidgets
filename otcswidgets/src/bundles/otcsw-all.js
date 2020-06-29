// Placeholder for the build target file; the name must be the same,
// include public modules from this component

define([
  // add public files for this module here
  'otcsw/widgets/noteview/noteview.view',
  'json!otcsw/widgets/noteview/noteview.manifest.json',
  "otcsw/widgets/testing/testing.view",
  'json!otcsw/widgets/testing/testing.manifest.json',
], {});

require([
  'require',
  'css'
], function (require, css) {
  // Load the bundle-specific stylesheet
  css.styleLoad(require, 'otcsw/bundles/otcsw-all');
});
