const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    680: {
      slidesPerView:3.5,
      spaceBetween: 60
    }
  }
})

let isDisabled = false;
const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView:3.5,
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach(item => {
  item.onclick = (e) => {
    e.currentTarget.classList.toggle("opened");
    isDisabled = !isDisabled;
    isDisabled ? disableScrolling() : enableScrolling();
  };
})

let desc = document.querySelector(".description")
sliderMain.on("slideChange", e => {
  sliderMain.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden");
})
