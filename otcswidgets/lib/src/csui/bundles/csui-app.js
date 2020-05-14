/* Copyright (c) 2016-2017  OpenText Corp. All Rights Reserved. */

define([
  'csui/behaviors/dropdown.menu/dropdown.menu.behavior',
  'csui/behaviors/expanding/expanding.behavior',
  'csui/behaviors/item.error/item.error.behavior',
  'csui/behaviors/item.state/item.state.behavior',
  'csui/behaviors/item.state/item.state.view',
  'csui/behaviors/limiting/limiting.behavior',
  'csui/controls/tile/behaviors/expanding.behavior',
  'csui/controls/tile/tile.view',
  'csui/controls/iconpreload/icon.preload.view',
  'csui/controls/rich.text.editor/rich.text.editor',
  'csui/controls/selected.count/selected.count.view',
  'csui/lib/jquery.mockjax',
  'csui/lib/jquery.simulate',
  'csui/lib/othelp',
  'csui/models/expandable',
  'csui/pages/start/start.page.view',
  'csui/widgets/navigation.header/controls/help/help.view',
  'csui/widgets/navigation.header/controls/home/home.view',
  'csui/widgets/navigation.header/controls/breadcrumbs/breadcrumbs.view',
  'csui/widgets/navigation.header/controls/search/search.view',
  'csui/widgets/navigation.header/controls/favorites/favorites.view',
  'csui/widgets/navigation.header/controls/user.profile/user.profile.view',
  'csui/widgets/navigation.header/controls/progressbar.maximize/progressbar.maximize.view',
  'i18n!csui/controls/tabletoolbar/impl/nls/localized.strings',
  'csui/controls/tabletoolbar/impl/nls/localized.strings',
  'json!csui/utils/contexts/perspective/impl/perspectives/error.global.json',
  'csui/widgets/error.global/error.global.view',
  'csui/widgets/favorites/favorites.view',
  'csui/widgets/favorites/tileview.toolbaritems',
  'csui/widgets/myassignments/myassignments.columns',
  'csui/widgets/myassignments/myassignments.view',
  'csui/widgets/navigation.header/profile.menuitems',
  'csui/widgets/navigation.header/profile.menuitems.mask',
  'csui/widgets/placeholder/placeholder.view',
  'csui/widgets/recentlyaccessed/recentlyaccessed.columns',
  'csui/widgets/recentlyaccessed/recentlyaccessed.view',
  'csui/widgets/recentlyaccessed/tileview.toolbaritems',
  'csui/widgets/search.box/search.box.view',
  'csui/widgets/shortcut/shortcut.view',
  'csui/widgets/shortcuts/shortcuts.view',
  'csui/widgets/welcome.placeholder/welcome.placeholder.view',

  'csui/widgets/html.editor/impl/cslink.preview/cslink.preview.view',
  'csui/widgets/html.editor/html.editor.view',
  'json!csui/widgets/error.global/error.global.manifest.json',
  'json!csui/widgets/favorites/favorites.manifest.json',
  'json!csui/widgets/myassignments/myassignments.manifest.json',
  'json!csui/widgets/placeholder/placeholder.manifest.json',
  'json!csui/widgets/recentlyaccessed/recentlyaccessed.manifest.json',
  'json!csui/widgets/shortcut/shortcut.manifest.json',
  'json!csui/widgets/shortcuts/shortcuts.manifest.json',
  'json!csui/widgets/welcome.placeholder/welcome.placeholder.manifest.json',

  'json!csui/widgets/html.editor/html.editor.manifest.json',

  'i18n!csui/widgets/favorites/impl/nls/favorites.manifest',
  'i18n!csui/widgets/myassignments/impl/nls/myassignments.manifest',
  'i18n!csui/widgets/placeholder/impl/nls/placeholder.manifest',
  'i18n!csui/widgets/recentlyaccessed/impl/nls/recentlyaccessed.manifest',
  'i18n!csui/widgets/shortcut/impl/nls/shortcut.manifest',
  'i18n!csui/widgets/shortcuts/impl/nls/shortcuts.manifest',
  'i18n!csui/widgets/welcome.placeholder/impl/nls/welcome.placeholder.manifest',

  'i18n!csui/widgets/html.editor/impl/nls/html.editor.manifest',
  'i18n!csui/widgets/favorites/impl/nls/lang',
  'i18n!csui/widgets/myassignments/impl/nls/lang',
  'i18n!csui/widgets/recentlyaccessed/impl/nls/lang',
], {});

require(['require', 'css'], function (require, css) {
  css.styleLoad(require, 'csui/bundles/csui-app', true);
});
