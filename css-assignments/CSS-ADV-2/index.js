$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");
    $(".nav-list").slideToggle("slow");
  });
});

$(window).resize(function () {
  if ($(window).width() > 915) {
    $(".nav-list").removeAttr("style");
  }
});
