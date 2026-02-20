$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(this).toggleClass("active-btn");
    $(".nav-list").slideToggle("slow");
  });
});

$(window).resize(function () {
  if ($(window).width() > 992) {
    $(".nav-list").removeAttr("style");
  }
});
