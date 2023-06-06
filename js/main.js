const tabItem = document.querySelectorAll('.tabs_btn_item');
const tabContent = document.querySelectorAll('.tabs_content_item');

tabItem.forEach(function(element){
  element.addEventListener('click',open)
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tbi-active');
  })

  tabTarget.classList.add('tbi-active');

  tabContent.forEach(function(item){
    item.classList.remove('tci-active')
  });

  document.querySelector(`#${button}`).classList.add('tci-active');
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});

tbi-active