/* global $, _ */
define([], function() {
  var self = {
    previous_hash: "",
    hash_listeners: [],
    previous_query: "",
    query_listeners: [],
    any_listeners: []
  };
  var inst = $.extend(self, {
    __init: function() {
      console.log("route :: __init");
      $(window).on("hashchange", function() {
        self.get_hash(function(hash) {
          if (hash != self.previous_hash) {
            _.each(self.hash_listeners, function(hash_listener) {
              self.get_hash(hash_listener);
            });
          }
          self.previous_hash = hash;
        });
        self.get_query(function(query) {
          if (query != self.previous_query) {
            _.each(self.query_listeners, function(query_listener) {
              self.get_query(query_listener);
            });
          }
        });
        _.each(self.any_listeners, function(any_listener) {
          self.get_hash(function(hash) {
            self.get_query(function(query) {
              if (any_listener) {
                any_listener(hash, query);
              }
            });
          });
        });
      });
    },
    register_hash_listener: function(callback) {
      console.log("route :: register_hash_listener", callback);
      self.hash_listeners.push(callback);
      self.get_hash(callback);
    },
    register_query_listener: function(callback) {
      console.log("route :: register_query_listener", callback);
      self.query_listeners.push(callback);
      self.get_query(callback);
    },
    register_any_listener: function(callback) {
      console.log("route :: register_any_listener", callback);
      self.any_listeners.push(callback);
      self.get_hash(function(hash) {
        self.get_query(function(query) {
          if (callback) {
            callback(hash, query);
          }
        });
      });
    },
    get_hash: function(callback) {
      if (callback) {
        callback(window.location.hash.split("?")[0].substr(1));
      }
    },
    get_query: function(callback) {
      if (callback) {
        callback(window.location.hash.split("?")[1]);
      }
    },
    set_query: function(query) {
      self.get_hash(function(hash) {
        window.location.hash = "#" + hash + "?" + query;
      });
    }
  });
  inst.__init();
  return inst;
});
