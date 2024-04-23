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
// La función toggleMenu permanece igual

// const toggleMenuAndChangeContent = (section) => {
//   toggleMenu();  // Llama a tu función toggleMenu existente

//   // Ahora, puedes agregar lógica para cambiar el contenido según el enlace clicado
//   const contentElement = document.getElementById('content-placeholder-1');

//   switch (section) {
//       case 'nosotros':
//           contentElement.innerHTML = `
              

//                 <h1>Historia</h1>


//               <h1>Pastores</h1>


//               <h1>Áreas</h1>
  
//           `;
//           break;

      

//       // Agrega más casos según sea necesario

//       default:
//           // Si no se proporciona una sección válida, no cambies nada
//           break;
//   }
// };

    
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');
// let carouselDom = document.querySelector('.carousel');
// let listItemDom = document.querySelector('.carousel .list');
// let thumbailDom = document.querySelector('.carousel .thumbail');

// nextDom.onclick = function () {
//   showSlider('next');
// }
// prevDom.onclick = function(){
//   showSlider('prev')
// }

// let timeRunnig = 3000;
// let timeAutoNext = 7000;
// let runTimeOut ; 
// let runAutoRun =setTimeout(()=>{
//   nextDom.click();
// }, timeAutoNext);
// function showSlider(type){
//   let itemSlider = document.querySelectorAll('.carousel .list .item');
//   let itemThumbail = document.querySelectorAll('.carousel .thumbail .item');

//   if (type == 'next') {
//     listItemDom.appendChild(itemSlider[0]);
//     thumbailDom.appendChild(itemThumbail[0]);
//     carouselDom.classList.add('next')
//   }else{
//     let positionLastItem = itemSlider.length -1;
//     listItemDom.prepend(itemSlider[positionLastItem])
//     thumbailDom.prepend(itemThumbail[positionLastItem])
//     carouselDom.classList.add('prev')
//   }
//   clearTimeout(runTimeOut);
//     runTimeOut =setTimeout(()=>{
//       carouselDom.classList.remove('next');
//       carouselDom.classList.remove('prev');

//     },timeRunnig)
//   clearTimeout(runAutoRun);
//   runAutoRun = setTimeout(()=>{
//     nextDom.click();
//   }, timeAutoNext)

// }

  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      })
  })
  



