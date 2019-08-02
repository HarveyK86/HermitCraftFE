/* global $, _ */
define(["api/youtube"], function(youtube) {
  var self = {
    // empty
  };
  return $.extend(self, {
    __init: function($content, template, page_config, hermit_config) {
      console.log("hermits :: __init", $content, template, page_config, hermit_config);
      youtube.get_hermit(hermit_config, function(hermit_data) {
        console.log("hermits :: __init:: hermit_data", hermit_data);
        var seo_template = _.template(page_config.hermit_seo);
        $content.empty();
        $content.append(template({
          page: page_config,
          hermit: hermit_config,
          data: hermit_data,
          hermit_seo: seo_template({
            hermit: hermit_config
          })
        }));
      });
    }
  });
});
