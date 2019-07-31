/* global requirejs */
requirejs.config({
  "paths": {
    "bootstrap": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min",
    "jquery": "https://code.jquery.com/jquery-3.4.1.min",
    "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min"
  }
});
requirejs(["jquery", "bootstrap", "util/component"], function($, bootstrap, component) {
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
