const pcTitleBtns = [...document.querySelectorAll(".pc__title-button")];
const pcDisclaimer = document.querySelector(".pc__disclaimer");
const pcDisclaimerBtn = document.querySelector(".pc__disclaimer-btn");
const shareBtn = document.querySelector(".pc__share-btn");
const shareContainer = document.querySelector(".pc__share-more");
const shareClose = document.querySelector(".pc__share-more-close");

// Share container
const title = document
  .querySelector("meta[property='og:title']")
  .getAttribute("content");
const encodedTitle = encodeURIComponent(title.trim());
const url = document
  .querySelector("meta[property='og:url']")
  .getAttribute("content");
const encodedUrl = encodeURI(url);

const desc = document
  .querySelector("meta[property='og:description']")
  .getAttribute("content");
const encodedDesc = encodeURIComponent(desc.trim());

const twitter = document.querySelector(".pc__share-more-btn__link.-tw");
const facebook = document.querySelector(".pc__share-more-btn__link.-fb");
const linkedin = document.querySelector(".pc__share-more-btn__link.-li");
const whatsapp = document.querySelector(".pc__share-more-btn__link.-wa");
const link = document.querySelector(".pc__share-more-btn__link.-link");
const linkText = link.querySelector(".pc__share-more-link-btn-content");

pcTitleBtns.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    $(pcDisclaimer).fadeIn();

    setTimeout(() => {
      $(pcDisclaimer).fadeOut();
    }, 6000);
  });
});

$(document).scroll(function () {
  $(pcDisclaimer).fadeOut();
});

$(document).ready(function () {
  setTimeout(() => {
    $(pcDisclaimer).fadeOut();
  }, 5000);
});

pcDisclaimerBtn.addEventListener("click", (e) => {
  $(pcDisclaimer).fadeOut();
});

shareBtn.addEventListener("click", (e) => {
  e.preventDefault();
  $(shareContainer).fadeIn();
});

shareClose.addEventListener("click", (e) => {
  e.preventDefault();
  $(shareContainer).fadeOut();
});

link.addEventListener("click", (e) => {
  e.preventDefault();
  const orig = link.dataset.ori;
  const cp = link.dataset.cp;
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(
    function () {
      linkText.innerText = cp;
      setTimeout(() => {
        linkText.innerText = orig;
      }, 4000);
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );

  setTimeout(() => {}, 4000);
});

// twitter.setAttribute('href', 'https://twitter.com/intent/tweet?url=' + url + '&amp;text= ' + title + ' - &amp;related=ftcompanies&amp;via=ft_content')
// facebook.setAttribute('href', 'http://www.facebook.com/sharer.php?u=' + url + '&t=' + title + '')
// linkedin.setAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '&title=' + encodedTitle + '&source=@ft_content')
// whatsapp.setAttribute('href', 'whatsapp://send?text=' + encodedTitle + '%20-%20' + encodedUrl + '')
