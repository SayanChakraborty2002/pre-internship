$(document).ready(function () {
  $("form").on("submit", function () {
    $("input").each(function (i, ele) {
      if ($(ele).val().trim() == "") {
        isEmpty = true;
        return false;
      }
    });
    if (isEmpty) {
      alert("Please fill all the fields");
    }
  });
});
