/* Copyright (c) 2016-2017  OpenText Corp. All Rights Reserved. */

define([
  'csui/lib/underscore',
  'csui/lib/jquery',
  'csui/lib/backbone'
], function (_, $, Backbone) {
  'use strict';

  var BoSearchModel = Backbone.Model.extend({

    constructor: function BoSearchModel(attributes, options) {
      Backbone.Model.prototype.constructor.apply(this, arguments);
    }

  });

  return BoSearchModel;

});
