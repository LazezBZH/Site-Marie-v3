const langSwitcher = document.querySelector(".lang-switcher");
const html = document.querySelector("html");
const contact2 = document.querySelector(".i18n-contact2");
const contact4 = document.querySelector(".i18n-contact4");
const loader = document.querySelector(".loader");
const header = document.querySelector("header");

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "fr-fr");
}
const chosenLang = localStorage.getItem("lang");
console.log(chosenLang);

window.addEventListener("load", setLang);

function setLang() {
  loader.style.display = "block";
  window.scrollTo(0, 0);

  setTimeout(function () {
    loader.style.display = "none";
    header.style.zIndex = "999";
  }, 1700);
  html.setAttribute("lang", chosenLang);
  if (html.getAttribute("lang") === "fr-fr") {
    contact2.innerHTML = `<a href="https://forms.gle/uNt3CuQX9QPtZv318"><img  src="/images/formfr.jpg" alt="">
</a>`;
    contact4.innerHTML = `<a class="btn btn-icon btn-phone" href="tel:+33650335412"><i class="fas fa-phone"></i><span>+33650335412</span></a>`;
  } else if (html.getAttribute("lang") === "en-gb") {
    contact2.innerHTML = `<a href="https://forms.gle/42yqmJ26zecSsn5i9">
  <img  src="/images/formen.jpg" alt="">
</a>`;
    contact4.innerHTML = `<a class="btn btn-icon btn-phone" href="tel:+353870623425"><i class="fas fa-phone"></i><span>+353870623425</span></a>`;
  }
}

langSwitcher.addEventListener("click", function () {
  if (html.getAttribute("lang") === "fr-fr") {
    html.setAttribute("lang", "en-gb");
    localStorage.setItem("lang", "en-gb");
    contact2.innerHTML = `<a href="https://forms.gle/42yqmJ26zecSsn5i9">
  <img  src="/images/formen.jpg" alt="">
</a>`;
    contact4.innerHTML = `<a class="btn btn-icon btn-phone" href="tel:+353870623425"><i class="fas fa-phone"></i><span>+353870623425</span></a>`;
  } else {
    html.setAttribute("lang", "fr-fr");
    localStorage.setItem("lang", "fr-fr");
    contact2.innerHTML = `<a href="https://forms.gle/uNt3CuQX9QPtZv318"><img  src="/images/formfr.jpg" alt="">
</a>`;
    contact4.innerHTML = `<a class="btn btn-icon btn-phone" href="tel:+33650335412"><i class="fas fa-phone"></i><span>+33650335412</span></a>`;
  }
});
