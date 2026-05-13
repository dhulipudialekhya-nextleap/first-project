(function () {
  var password = document.getElementById("password");
  var toggle = document.getElementById("show-password");
  if (!password || !toggle) return;

  toggle.addEventListener("change", function () {
    password.type = toggle.checked ? "text" : "password";
  });
})();
