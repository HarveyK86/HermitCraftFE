/* global requirejs */
requirejs.config({
  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.4.1.min",
    "bootstrap": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min"
  }
});
requirejs(["jquery", "bootstrap", "util/example"], function($, bootstrap, example) {
  var self = {
    config: {
      // empty
    }
  };
  $.extend(self, {
    __init: function() {
      console.log("main.js :: __init");
      example.sayHello();
    }
  }).__init();
});