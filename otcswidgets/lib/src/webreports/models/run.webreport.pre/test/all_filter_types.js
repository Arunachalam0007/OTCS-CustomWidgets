/* Copyright (c) 2016-2017  OpenText Corp. All Rights Reserved. */

define(["csui/lib/underscore", "csui/lib/backbone"
], function (_, Backbone ) {
	'use strict';

	function allFilterTypes() {
	}

	_.extend(allFilterTypes.prototype, Backbone.Events, {
		allTypes: [
			-1,
			30319,
			834,
			1298,
			30309,
			907,
			480,
			484,
			483,
			753,
			290,
			291,
			274,
			31602,
			31601,
			31603,
			356,
			357,
			123461,
			133,
			131,
			132,
			207,
			209,
			199,
			197,
			196,
			198,
			194,
			298,
			902,
			3030338,
			3030339,
			3030329,
			3030335,
			3030334,
			348,
			345,
			346,
			347,
			3030202,
			3030002,
			3030333,
			3030004,
			3030001,
			3030201,
			3030205,
			136,
			557,
			3030372,
			797,
			796,
			795,
			481,
			32657,
			257,
			32658,
			146,
			844,
			270,
			276,
			372,
			373,
			375,
			277,
			215,
			143,
			602,
			555,
			554,
			144,
			282,
			283,
			180,
			900,
			3030130,
			749,
			751,
			259,
			272,
			141,
			904,
			905,
			903,
			901,
			1299,
			123475,
			123476,
			906,
			0,
			223,
			230,
			123469,
			123470,
			374,
			2,
			482,
			2510,
			833,
			552,
			226,
			293,
			731,
			368,
			147,
			924,
			2504,
			361,
			299,
			3030331,
			732,
			920,
			273,
			1281,
			212,
			397,
			302,
			870,
			532,
			142,
			3030756,
			208,
			1297,
			1296,
			403,
			371,
			370,
			3030204,
			3030203,
			3030003,
			398,
			3030343,
			908,
			218,
			271,
			919,
			195,
			202,
			543,
			201,
			384,
			380,
			387,
			829,
			260,
			1282,
			441,
			296,
			430,
			432,
			431,
			327,
			425,
			428,
			556,
			550,
			405,
			138,
			137,
			381,
			134,
			558,
			211,
			139,
			551,
			559,
			426,
			427,
			835,
			369,
			292,
			269,
			258,
			278,
			383,
			1,
			275,
			1283,
			1280,
			280,
			231,
			148,
			206,
			205,
			204,
			210,
			294,
			268,
			542,
			541,
			145,
			3030371,
			130,
			149,
			526,
			527,
			531,
			530,
			525,
			281,
			3030330,
			140,
			899,
			529,
			236,
			235,
			234,
			233,
			30303,
			5573,
			5574,
			528,
			154,
			128,
			190,
			161,
			162,
			286,
			285,
			335,
			336
		]
	});

	allFilterTypes.prototype.get = Backbone.Model.prototype.get;
	_.extend(allFilterTypes, {version: "1.0"});

	return allFilterTypes;

});

