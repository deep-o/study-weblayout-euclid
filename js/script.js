window.addEventListener("DOMContentLoaded", function () {
  // плавный скролл ***********************************************************************
  const smoothLinks = document.querySelectorAll(".header-nav__link");
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // поиск ***********************************************************************************

  let search = document.querySelector(".search__show");
  let nav = document.querySelector(".header-nav");
  let form = document.querySelector(".search__form");
  let searchClose = document.querySelector(".search__close");
  let logo = document.querySelector(".logo");
  let input = document.querySelector(".search__input");
  let searchRun = document.querySelector(".search__run")

  function showSearchField() {
    nav.classList.add("visually-hidden");
    form.classList.remove("visually-hidden");
    form.classList.add("search__form-open");
    search.classList.add("visually-hidden");
    if (window.innerWidth <= 767 ) {
      logo.classList.add("visually-hidden");
    }
  }

  search.addEventListener("click", showSearchField);

  function closeSearchField() {
    form.classList.remove("search__form-open");
    function btnOpen() {
      search.classList.remove("visually-hidden");
    }
    function navOpen() {
      form.classList.add("visually-hidden");
      nav.classList.remove("visually-hidden");
    }
    setTimeout(navOpen, 200);
    setTimeout(btnOpen, 200);

    if (window.innerWidth <= 767 ) {
      function logo() {
        let logo = document.querySelector(".logo");
        logo.classList.remove("visually-hidden");
      }
      setTimeout(logo, 200)
    }
  }

  searchClose.addEventListener("click", closeSearchField)

  function focusToSearch() {
    showSearchField();
  }

  input.onfocus = function() {
    showSearchField();
  }

  searchRun.onfocus = function() {
    showSearchField();
  }


  // BURGER **********************************************************************************
  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".header-nav");
  let close = document.querySelector(".header__close");
  burger.addEventListener("click", function () {
    menu.classList.add("header__nav__open");
    $("body").toggleClass("lock");
  });

  close.addEventListener("click", function () {
    menu.classList.remove("header__nav__open");
    $("body").toggleClass("lock");
  });

  // SWIPER **********************************************************************************

  const mySwiper = new Swiper(".mySwiper", {
    // Optional parameters
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    grabCursor: "true",
    autoheight: "true",
  });

  //ACCORDION ******************************************************************************

  $(function () {
    $("#accordion").accordion();
  });

  $(".selector").accordion({
    collapsible: true,
    active: false,
  });

  //TABS ******************************************************************************

  document.querySelectorAll(".work-menu__step").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      console.log(path);

      document
        .querySelectorAll(".work__article")
        .forEach(function (tabContent) {
          tabContent.classList.remove("tab-content-active");
        });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");
    });
  });
});
