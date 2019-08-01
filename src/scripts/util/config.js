/* global $ */
define([], function() {
  var self = {
    name: "HermitArchive",
    pages: [{
      name: "Page 1",
      slug: "page-1",
      tabs: [{
        name: "Tab 1",
        slug: "tab-1"
      }, {
        name: "Tab 2",
        slug: "tab-2"
      }]
    }, {
      name: "Page 2",
      slug: "page-2",
      tabs: [{
        name: "Tab 3",
        slug: "tab-3"
      }, {
        name: "Tab 4",
        slug: "tab-4"
      }, {
        name: "Tab 5",
        slug: "tab-5"
      }]
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
