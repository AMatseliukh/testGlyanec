"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  // let menuArrows = document.querySelectorAll('.menu__arrow');
  // if (menuArrows.length > 0) {
  //   for(let i = 0; i < menuArrows.length; i++){
  //     const menuArrow = menuArrows[i];
  //     menuArrow.addEventListener("click", function(e) {
  //       menuArrow.parentElement.classList.toggle('_active');
  //     });
  //   }
  // }
} else {
  document.body.classList.add("_pc");
}

// меню бургер -----------------------

const burgerMenu = document.querySelector(".menu-header__burger");
const menuList = document.querySelector(".menu-header__list");
const toggleMenu = function () {
  menuList.classList.toggle("_active");
};

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    burgerMenu.classList.toggle("_active");
    menuList.classList.toggle("_active");
  });
}

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menuList = target == menuList || menuList.contains(target);
  const its_burgerMenu = target == burgerMenu;
  const menuList_is_active = menuList.classList.contains("_active");

  if (!its_menuList && !its_burgerMenu && menuList_is_active) {
    toggleMenu();
  }
});

// goods-menu ------------------------------

const goodsTitle = document.querySelector(".goods-menu__title");
const goodsMenuList = document.querySelector(".goods-menu__list");

const toggleGoodMenu = function () {
  goodsMenuList.classList.toggle("_active");
};

if (goodsTitle) {
  goodsTitle.addEventListener("click", function (e) {
    e.stopPropagation();
    goodsMenuList.classList.toggle("_active");
  });
}
document.addEventListener("click", function (e) {
  const target = e.target;
  const its_goodsMenuList =
    target == goodsMenuList || goodsMenuList.contains(target);
  const its_goodsTitle = target == goodsTitle;
  const goodsMenuList_is_active = goodsMenuList.classList.contains("_active");

  if (!its_goodsMenuList && !its_goodsTitle && goodsMenuList_is_active) {
    toggleGoodMenu();
  }
});

// --Динамічний адаптив кнопки "Замовити дзвінок" ----

// const buyHeader = document.querySelector('.buy-header');
// const headerCall = document.querySelector('.header__call');
// const buyHeaderCall = document.querySelector('.buy-header__call');

// -------main-slider -------- Swiper
const mainSlider = document.querySelector(".main-slider__body");

const mainSwiper = new Swiper(mainSlider, {
  //   // If we need pagination
  pagination: {
    el: ".slider-content__counts",
    type: "fraction",
    // clicable: true,
    // renderFraction: function (currentClass, totalClass) {
    //   return '0<span class="' + currentClass + '"></span>' + '/' +
    //   '0<span class="' + totalClass + '"></span>';
    // },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__body .swiper-button-next",
    prevEl: ".main-slider__body .swiper-button-prev",
  },

  // Pagination fraction

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

const categorySlider = document.querySelector(".category-slider");

let categorySwiper;

function mobileSlider() {
  if (window.innerWidth <=767 && categorySlider.dataset.mobile == 'false') {
    categorySwiper = new Swiper(categorySlider, {
      slidesPerView: 1.5,
      loop: true,
      // slideBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',
        // type: 'bullets',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2.5,
        }
      }
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    }); 

    categorySlider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767) {
    categorySlider.dataset.mobile = "false";

    if (categorySlider.classList.contains('swiper-initialized')) {
      categorySwiper.destroy();
    }

    
  }
}
mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


  //   if (window.innerWidth <= 767 && categorySlider.dataset.mobile == "false") {
  //     
        // breakpoints: {
        //   480: {
        //     slidesPerView: 2.5,
        //   }
        // }
  //     });
  //     categorySlider.dataset.mobile = "true";
// }

//   if (window.innerWidth > 767) {
//     categorySlider.dataset.mobile = "false";

//     // categorySlider.destroy();
//   }
// }
// // mobileSlider();

// window.addEventListener('resize', () => {
//   mobileSlider();
// });

// ------------------------------------------

const lableDescs = document.querySelectorAll(".item-product__lable-desc");
const lableActions = document.querySelectorAll(".item-product__lable-action");

for (let i = 0; i < lableActions.length; i++) {
  if (lableActions[i].textContent == "") {
    // console.log(lableActions[i]);
    lableActions[i].style.display = "none";
  }
}

for (let j = 0; j < lableDescs.length; j++) {
  if (lableDescs[j].textContent == "") {
    lableDescs[j].style.display = "none";
  }
}
// console.log(lableActions);

// lableActions.forEach(function() {
//   if()
// })

// for (let lableAction of lableActions) {
//   // if (lableAction.textContent == "")
//   // if (lableAction.innerHTML == "")
//   if (lableAction.textContent == ""){
//     // console.log(lableAction.textContent);

//     lableAction.classList.add('hidden');
//     // Uncaught TypeError: Cannot read properties of undefined (reading 'classList')

//     console.log(lableAction.textContent);

//     // this.classList.add('hidden');
//     // Uncaught TypeError: Cannot read properties of undefined (reading 'add')

//     // lableAction.this.style.display = "none";
//     // main.js:158 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
//   }
// }


const aboutTextHiddens = document.querySelectorAll(".about__text-hidden");
const aboutTextDotts = document.querySelector(".about__text-dotts");
const aboutTextMore = document.querySelector(".about__text-more");
const aboutTextLess = document.querySelector(".about__text-less");

aboutTextMore.addEventListener("click", function () {
  for (let aboutTextHidden of aboutTextHiddens) {
    aboutTextHidden.style.display = "block";
    aboutTextMore.style.display = "none";
    aboutTextDotts.style.display = "none";
    aboutTextLess.style.display = "block";
  }
});
aboutTextLess.addEventListener("click", function () {
  for (let aboutTextHidden of aboutTextHiddens) {
    aboutTextHidden.style.display = "none";
    aboutTextLess.style.display = "none";
    aboutTextDotts.style.display = "block";
    aboutTextMore.style.display = "block";
  }
});
