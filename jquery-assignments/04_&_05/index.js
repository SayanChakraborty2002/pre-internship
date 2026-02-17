$(document).ready(function () {
  $("header").click(function () {
    $(".header").css("background-color", "purple");
  });
  $(".sidebar").click(function () {
    $(".sidebar").text("Leftbar");
  });
  $(".extra-content").click(function () {
    $(".main-content").fadeOut("slow");
  });
  $("footer").click(function () {
    $(".pop-up").css("display", "flex");
  });
  $(".pop-up-btn").click(function () {
    $(".pop-up").css("display", "none");
  });
});
