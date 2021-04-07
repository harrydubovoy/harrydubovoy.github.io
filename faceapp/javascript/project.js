document.addEventListener('DOMContentLoaded', function () {

  const globalDocument = document;
  const global = window;

  // sliders
  const splideOptions = {
    type: 'loop',
    autoHeight: true,
    arrows: true,
    perPage: 3,
    gap: 30,

    breakpoints: {
      576: {
        perPage: 1,
        arrows: false,
      },
      768: {
        perPage: 2,
        arrows: false,
        gap: 15,
      },
      1024: {
        arrows: false,
      }
    }
  }

  if (global.innerWidth <= 768) {
    const splideOptions = {
      type: 'loop',
      autoHeight: true,
      arrows: true,
      perPage: 3,
      gap: 30,
      breakpoints: {
        768: {
          perPage: 1,
          arrows: false,
        },
      }
    }

    new Splide('.js-products', splideOptions).mount();
    new Splide('.js-features', splideOptions).mount();
    new Splide('.js-roadmap', splideOptions).mount();
  }

  new Splide('.js-advisors-advisors', splideOptions).mount();
  new Splide('.js-advisors-press', splideOptions).mount();

  const header = globalDocument.querySelector('#header');
  const menuButton = header.querySelector('#menu-button');
  const navigationGroup = header.querySelector('#navigation-group');
  const navigation = header.querySelector('#navigation');

  // show logo
  if (global.innerWidth > 1023) {
    const headerLogo = header.querySelector('#header-logo');
    globalDocument.addEventListener('scroll', function (event) {
      if (global.scrollY > 100) {
        headerLogo.classList.add('is-visible');
      } else {
        headerLogo.classList.remove('is-visible');
      }
    })
  }

  function handleNavigation (classAction) {
    menuButton.classList[classAction]('is-active');
    navigationGroup.classList[classAction]('is-active');
    globalDocument.body.classList[classAction]('is-freeze');
  }

  // mobile menu
  menuButton.addEventListener('click', function (event) {
    handleNavigation('toggle');
  })

  // smooth scroll
  navigation.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      handleNavigation('remove');
      const anchor = globalDocument.querySelector(event.target.hash);
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  })


  console.log( "ready!" );
});
