/* global $ */
define([], function() {
  var self = {
    name: "HermitArchive",
    pages: [{
      name: "Page 1",
      slug: "page-1"
    }, {
      name: "Page 2",
      slug: "page-2"
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
