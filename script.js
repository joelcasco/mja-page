const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "assets/burger-menu.svg";
  const iconName = isBurger ? "assets/close.svg" : "assets/burger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
  }
}
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbailDom = document.querySelector('.carousel .thumbail');

nextDom.onclick = function () {
  showSlider('next');
}
prevDom.onclick = function(){
  showSlider('prev')
}

let timeRunnig = 3000;
let timeAutoNext = 7000;
let runTimeOut ; 
let runAutoRun =setTimeout(()=>{
  nextDom.click();
}, timeAutoNext);
function showSlider(type){
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbail = document.querySelectorAll('.carousel .thumbail .item');

  if (type == 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbailDom.appendChild(itemThumbail[0]);
    carouselDom.classList.add('next')
  }else{
    let positionLastItem = itemSlider.length -1;
    listItemDom.prepend(itemSlider[positionLastItem])
    thumbailDom.prepend(itemThumbail[positionLastItem])
    carouselDom.classList.add('prev')
  }
  clearTimeout(runTimeOut);
    runTimeOut =setTimeout(()=>{
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');

    },timeRunnig)
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(()=>{
    nextDom.click();
  }, timeAutoNext)


}


