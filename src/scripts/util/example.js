define(["jquery"], function($) {
  var self = {
    config: {
      // empty
    }
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("example.js :: __init");
    },
    sayHello: function() {
      console.log("example.js :: sayHello :: Hello, World!");
    }
  });
  inst.__init();
  return inst;
});