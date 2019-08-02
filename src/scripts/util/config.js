/* global $ */
define([], function() {
  var self = {
    name: "HermitArchive",
    seo: "HermitArchive: The HermitCraft Archive",
    api_key: "INSERT API KEY HERE",
    pages: [{
      name: "Videos",
      icon: "play-circle",
      slug: "videos",
      seo: "Latest HermitCraft: Season 6 Videos",
      hermit_seo: "Lastest <%= hermit.name %> Videos"
    }, {
      name: "Hermits",
      slug: "hermits",
      icon: "user",
      seo: "Hermit Biographies and Information",
      hermit_seo: "All About <%= hermit.name %>"
    }],
    hermits: [{
      name: "Mumbo Jumbo",
      slug: "mumbo-jumbo",
      username: "ThatMumboJumbo"
    }, {
      name: "Grian",
      slug: "grian",
      username: "Xelqua"
    }, {
      name: "Xisuma",
      slug: "xisumavoid",
      username: "xisumavoid"
    }, {
      name: "Impulse",
      slug: "impulsesv",
      username: "impulseSV"
    }, {
      name: "Iskall",
      slug: "iskall85",
      username: "AhlViktor"
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
