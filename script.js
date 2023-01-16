const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


// play pause button
// const video = document.getElementById("myVideo");
// const btn = document.getElementById("myBtn");
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }

//side toggle bar
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

const productContainers = [...document.querySelectorAll('.product-container')];
const productContainers1 = [...document.querySelectorAll('.product-container1')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

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

// productContainers1.forEach((item, i) => {
//     let containerDimensions1 = item.getBoundingClientRect();
//     let containerWidth1 = containerDimensions1.width;

//     nxtBtn1[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth1;
//     })

//     preBtn1[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth1;
//     })
// })

//search engine
function searchBar(){
  const search = document.querySelector(".search").value.toUpperCase()
  const product = document.querySelector(".product")
  const allProduct = document.querySelectorAll(".product-card")
  const productTitle = document.getElementsByTagName("h3")

  for (var i = 0; i < productTitle.length; i++) {
      let match = allProduct[i].getElementsByTagName("h3")[0]
      if (match) {
          let value = match.textContent || match.innerHTML

          if (value.toUpperCase().indexOf(search) > -1) {
              allProduct[i].style.display = ""
          } else {
              allProduct[i].style.display = "none"
          }
      }
  }
}