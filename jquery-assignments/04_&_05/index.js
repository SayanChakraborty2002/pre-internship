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
    $(".pop-up").addClass("active");
  });
  $(".pop-up-btn").click(function () {
    $(".pop-up").removeClass("active");
  });
});
