$(document).ready(function () {
  let isEmpty = false;
  $("form").on("submit", function () {
    $(this)
      .find(":input")
      .not(":button", ":submit")
      .each(function () {
        if (!$(this).val().trim()) {
          isEmpty = true;
          return false;
        }
      });
    if (isEmpty) {
      alert("Please fill all the fields");
    }
  });
});
