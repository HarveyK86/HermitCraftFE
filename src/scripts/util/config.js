define(["jquery"], function($) {
  var self = {
    pages: [{
      name: "Page 1"
    }, {
      name: "Page 2"
    }]
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("config :: __init");
    }
  });
  inst.__init();
  return inst;
});
