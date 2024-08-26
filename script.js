document.getElementById("goToHome").addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
});

document.getElementById("goToMenu").addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = "menu.html";
  }, 500);
});

document
  .getElementById("goToAbout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = "about.html";
    }, 500);
  });

document
  .getElementById("goToContact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = "contact.html";
    }, 500);
  });
