/* global requirejs, $ */
requirejs.config({
  "paths": {
    "bootstrap": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min",
    "jquery": "https://code.jquery.com/jquery-3.4.1.min",
    "popper": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min",
    "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min"
  },
  "shim": {
    "bootstrap": {
      deps: ["jquery", "popper"],
      exports: "bootstrap"
    },
    "jquery": {
      exports: "$"
    },
    "popper": {
      exports: "Popper"
    },
    "underscore": {
      exports: "_"
    }
  },
  "map" : {
    "bootstrap": {
      "popper.js": "popper"
    }
  }
});
require(["bootstrap", "jquery", "underscore"], function() {
  require(["util/component"], function(component) {
    var self = {
      config: {
        // empty
      }
    };
    $.extend(self, {
      __init: function() {
        console.log("main :: __init");
        component.render_all();
      }
    }).__init();
  });
});
