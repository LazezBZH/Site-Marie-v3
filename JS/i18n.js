// $(".lang-switcher").on("click", function () {
//   var $html = $("html");

//   if ($html.attr("lang") === "fr-fr") {
//     $html.attr("lang", "en-gb");
//   } else {
//     $html.attr("lang", "fr-fr");
//   }
// });

// const langSwitcher = document.querySelector(".lang-switcher");
// const html = document.querySelector("html");
// document.addEventListener("DOMContentLoaded", function () {
//   langSwitcher.addEventListener("click", function () {
//     if (html.getAttribute("lang") === "fr-fr") {
//       html.setAttribute("lang", "en-gb");
//     } else {
//       html.setAttribute("lang", "fr-fr");
//     }
//   });
// });

const langSwitcher = document.querySelector(".lang-switcher");
const html = document.querySelector("html");

langSwitcher.addEventListener("click", function () {
  if (html.getAttribute("lang") === "fr-fr") {
    html.setAttribute("lang", "en-gb");
  } else {
    html.setAttribute("lang", "fr-fr");
  }
});
