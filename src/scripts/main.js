/* global requirejs, $ */
requirejs(["util/example"], function(example) {
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