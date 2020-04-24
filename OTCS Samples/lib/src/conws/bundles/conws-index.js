/* Copyright (c) 2016-2017  OpenText Corp. All Rights Reserved. */

require.config({
  bundles: {
'conws/bundles/conws-models': [
  'conws/models/workspacecreateforms',
  'conws/models/metadata.controller',
  'conws/models/favorite.model',
  'conws/models/workspacecontext/workspacecontext.model',
  'conws/models/workspacecontext/workspacecontext.node.model',
  'conws/models/workspacecontext/workspacecontext.node.factory',
  'conws/models/workspacecontext/workspacecontext.factory',
  'conws/utils/previewpane/impl/previewheader.model',
  'conws/utils/previewpane/impl/attributes.model',
  'conws/utils/previewpane/impl/role.model',
  'conws/widgets/team/impl/team.model',
  'conws/widgets/team/impl/team.model.factory',
  'conws/widgets/team/impl/participants.columns',
  'conws/widgets/team/impl/roles.columns',
  'conws/widgets/team/impl/participant.model',
  'conws/widgets/team/impl/participants.model',
  'conws/widgets/team/impl/participants.model.factory',
  'conws/widgets/team/impl/roles.model',
  'conws/widgets/team/impl/roles.model.expanded',
  'conws/widgets/team/impl/roles.model.factory',
  'conws/widgets/team/impl/controls/filter/impl/filter.model',
  'conws/models/categoryforms/categoryforms.model',
  'conws/models/selectedmetadataform/selectedmetadataform.model',
  'conws/models/selectedmetadataform/selectedmetadataform.factory',
  'conws/utils/workspaces/impl/workspaceutil',
  'conws/utils/workspaces/workspace.model',
  'conws/widgets/relatedworkspaces/impl/relatedworkspaces.model',
  'conws/widgets/relatedworkspaces/impl/relatedworkspaces.factory',
  'conws/widgets/header/impl/header.model',
  'conws/widgets/header/impl/header.model.factory',
  'conws/widgets/header/impl/header.icon.model',
  'conws/widgets/myworkspaces/impl/myworkspaces.model',
  'conws/widgets/myworkspaces/impl/myworkspaces.model.factory',
  'conws/widgets/outlook/impl/recentwksps/impl/recentwksps.model',
  'conws/widgets/outlook/impl/recentwksps/impl/recentwksps.model.factory',
  'conws/widgets/outlook/impl/folder/impl/folders.model',
  'conws/widgets/outlook/impl/wksp/impl/wksp.model',
  'conws/widgets/outlook/impl/favoritewksps/impl/favoritewksps.model',
  'conws/widgets/outlook/impl/favoritewksps/impl/favoritewksps.model.factory',
  'conws/widgets/outlook/impl/searchwksps/impl/searchwksps.model',
  'conws/widgets/outlook/impl/searchwksps/impl/searchwksps.model.factory',
  'conws/widgets/outlook/impl/searchwksps/impl/searchresult.model',
  'conws/widgets/outlook/impl/searchwksps/impl/wksptypes.model',
  'conws/models/configurationvolume/configurationvolume.factory',
  'conws/models/configurationvolume/configurationvolume.model'
],
'conws/bundles/conws-app': [
  'conws/utils/icons/icons',
  'conws/controls/inlineforms/workspace/workspace.view',
  'conws/controls/inlineforms/conwstemplate/conwstemplate.view',
  'conws/controls/form/fields/alpaca/referencefield',
  'conws/controls/description/description.view',
  'conws/controls/lazyactions/lazyToolbar.view',
  'conws/controls/selectedmetadataform/selectedmetadataform.view',
  'conws/controls/table/cells/role/role.view',
  'conws/controls/table/cells/permission/role.permission.level.view',
  'conws/controls/userpicker/role.view',
  'conws/dialogs/addoreditrole/addoreditrole.wizard',
  'conws/dialogs/applyrolepermissions/apply.role.permissions.view',
  'conws/dialogs/applyrolepermissions/impl/header/apply.role.permissions.header.view',
  'conws/utils/commands/tabletoolbar.extension',
  'conws/utils/commands/permissions/permissions.dropdown.menu.items.extension',
  'conws/utils/commands/permissions/permissions.list.toolbaritems.extension',  
  'conws/widgets/header/impl/headertoolbaritems.masks',
  'conws/utils/commands/addconws',
  'conws/utils/commands/addconwstemplate',
  'conws/utils/commands/delete',
  'conws/utils/commands/permissions/addoreditrole',
  'conws/utils/commands/addrelateditem',
  'conws/utils/commands/deleterelateditem',
  'conws/utils/commands/permissions/deleterole',
  'conws/utils/commands/permissions/edit.role.permissions',
  'conws/utils/commands/permissions/edit.role.permission.helper',
  'conws/utils/dragndrop/dragndrop.subtypes',
  'conws/widgets/relatedworkspaces/addrelatedworkspaces.search',
  'conws/widgets/relatedworkspaces/relatedworkspaces.view',
  'conws/widgets/header/header.view',
  'conws/widgets/team/team.view',
  'conws/widgets/myworkspaces/myworkspaces.view',
  'conws/widgets/metadata/metadata.view',
  'conws/widgets/outlook/conwsoutlook.view',
  'conws/widgets/configurationvolume/configurationvolume.view',
  'json!conws/widgets/relatedworkspaces/relatedworkspaces.manifest.json',
  'json!conws/widgets/header/header.manifest.json',
  'json!conws/widgets/team/team.manifest.json',
  'json!conws/widgets/myworkspaces/myworkspaces.manifest.json',
  'json!conws/widgets/metadata/metadata.manifest.json',
  'json!conws/widgets/configurationvolume/configurationvolume.manifest.json',
  'conws/widgets/outlook/impl/utils/emailservice',
  'conws/widgets/outlook/impl/utils/utility',
  'conws/widgets/team/impl/nls/team.lang',
  'conws/utils/previewpane/impl/nls/previewpane.lang',
  'conws/widgets/outlook/impl/nls/lang',
  'conws/widgets/configurationvolume/impl/nls/lang',
  'conws/widgets/configurationvolume/impl/nls/configurationvolume.manifest',
  'conws/widgets/team/impl/nls/team.manifest',
  'conws/widgets/metadata/impl/nls/metadata.manifest',
  'conws/widgets/relatedworkspaces/impl/nls/relatedworkspaces.manifest',
  'conws/widgets/header/impl/nls/header.manifest',
  'conws/widgets/myworkspaces/impl/nls/myworkspaces.manifest'
]
  }
});