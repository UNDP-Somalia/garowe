(function () {
  "use strict";
  App.Users = {
    onStateSelect() {
      var user_state = $("#user_state");
      var user_district_1 = $("#districts_1");
      var user_district_2 = $("#districts_2");

      function select_districts() {
        var value = user_state.val();
        if (value == "Inside Garowe Town") {
          user_district_1.removeAttr("style");
          user_district_2.attr("style", "display: none");
        } else if (value == "Outside Garowe Town") {
          user_district_1.attr("style", "display: none");
          user_district_2.removeAttr("style");
        }
      }

      user_state.change(function () {
        select_districts();
      });

      select_districts();
    },
    initialize: function () {
      App.Users.onStateSelect();
      var observer;
      $(".initialjs-avatar").initial();
      observer = new MutationObserver(function (mutations) {
        $.each(mutations, function (index, mutation) {
          $(mutation.addedNodes).find(".initialjs-avatar").initial();
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    },
  };
}.call(this));
