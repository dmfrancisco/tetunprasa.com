//= require jquery3
//= require jquery_ujs
//= require turbolinks

var Sheet;
var Marker;

$(document).ready(function () {
  $("body").addClass("js");

  Sheet = {
    show: function () {
      var $sheet = $("#sheet");

      if ($sheet.is(":visible")) return;
      $sheet.addClass("slideInRight").show();
      setTimeout(function () { $sheet.removeClass("slideInRight"); }, 750);
    },
    hide: function () {
      var $sheet = $("#sheet");

      if (!$sheet.is(":visible")) return;
      $sheet.addClass("slideOutRight");
      setTimeout(function () { $sheet.removeClass("slideOutRight").hide(); }, 750);
    }
  }

  // Hide side sheet on click
  $(document).on("click", "#close", function (e) {
    e.preventDefault();
    Sheet.hide();
  });

  // Hide promo on click
  $(document).on("click", "#promo-close", function (e) {
    e.preventDefault();
    $("#promo").hide();
  });

  // Setup infinite scrolling
  $(window).on("scroll", function () {
    var url = $('.pagination .next a').attr('href');

    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 200) {
      $('pagination').html();
      $.getScript(url);
    }
  });

  // Highlight matches
  Marker = {
    mark: function () {
      var keyword = $("input[name='buka']").val();
      var $results = $("#results");

      if ($results.find(".Entry--empty").length == 0) {
        $results.unmark({
          done: function() {
            $("#results").mark(keyword);
          }
        });
      }
    }
  }
  Marker.mark();
});
