$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(this).toggleClass("active-btn");
    $(".nav-list").slideToggle();
  });
});

$(window).resize(function () {
  if ($(window).width() > 992) {
    $(".nav-list").removeAttr("style");
    $(".menu-btn").removeClass("active-btn");
  }
});
