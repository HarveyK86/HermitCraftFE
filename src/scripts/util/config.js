/* global $ */
define([], function() {
  var self = {
    name: "HermitArchive",
    seo: "HermitArchive: The HermitCraft Archive",
    pages: [{
      name: "Videos",
      slug: "videos",
      seo: "Latest HermitCraft: Season 6 Videos",
      icon: "play-circle",
      tabs: [{
        name: "Mumbo Jumbo",
        slug: "mumbo-jumbo",
        seo: "Latest Mumbo Jumbo Videos"
      }, {
        name: "Grian",
        slug: "grian",
        seo: "Latest Grian Videos"
      }]
    }, {
      name: "Hermits",
      slug: "hermits",
      icon: "user",
      seo: "Hermit Biographies and Information",
      tabs: [{
        name: "Xisuma",
        slug: "xisuma",
        seo: "All About Xisuma"
      }, {
        name: "Impulse",
        slug: "impulse",
        seo: "All About Impulse"
      }, {
        name: "Iskall",
        slug: "iskall",
        seo: "All About Iskall"
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
