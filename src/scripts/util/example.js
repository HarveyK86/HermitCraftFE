/* global $ */
define([], function() {
  var self = {
    config: {
      // empty
    }
  };
  return $.extend(self, {
    __init: function() {
      console.log("example.js :: __init");
    },
    sayHello: function() {
      console.log("example.js :: sayHello :: Hello, World!");
    }
  }).__init();
});