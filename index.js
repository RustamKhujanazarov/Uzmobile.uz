const addPopular = document.getElementById("addPopular");
const popularContentBottom = document.getElementById("popularContentBottom");
const popularContent = document.getElementById("popularContent");
const tv = document.getElementsByClassName("special__content__card-one__content__text-two")[0];
const internet = document.getElementsByClassName("special__content__card-one__content__text-three")[0];
const mobile = document.getElementsByClassName("special__content__card-one__content__text-one")[0];
const formOne = document.getElementById("formOne");
const selectText = document.getElementById("select__text");
const select = document.getElementById("select");
const chevronDown = document.getElementsByClassName("rotate__icon")[0];
const option = document.querySelectorAll("#option");
const locationTop = document.getElementsByClassName("location__top__office__top")[0];
const langBottom = document.getElementsByClassName("language__bottom")[0];
const langTop = document.getElementById("languageTop");
const lang = document.querySelectorAll("#lang");
const uzbek = document.getElementById("uzbek");
const search = document.getElementsByClassName("header__bottom__search")[0];
const headerBottomRight = document.getElementsByClassName("header__bottom__right")[0];
const searchBtn = document.getElementsByClassName("header__bottom__right__icon")[0];
const searchButton = document.getElementsByClassName("header__bottom__bar__icon")[0];
const searchInput = document.getElementsByClassName("search__input")[0];
const popularContentResponsive = document.getElementById("popularContentResponsive")
const headerBottomBar = document.getElementsByClassName("header__bottom__bar__bars")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const header__bottom__bar = document.getElementsByClassName("header__bottom__bar")[0];


function openNav() {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  navbar.style.transform = "translatex(0%)"
};

function closeNav() {
  navbar.style.transform = "translatex(-100%)";
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
  
  
};

headerBottomBar.addEventListener("click", () =>{
  if(navbar.style.transform = "translatex(-100%)"){
    openNav()
  }
  else{
    navbar.style.transform = "translatex(-100%)";
    closeNav()
  }
})

const header__bottom__bar__search = document.getElementsByClassName("header__bottom__bar__search")[0];
const logo = document.getElementsByClassName("logo")[0];
const headerBottom = document.getElementsByClassName("header__bottom")[0];

searchButton.addEventListener("click", () =>{
  if(header__bottom__bar__search.style.display == "none"){
    header__bottom__bar__search.style.display = "flex";
    logo.style.display ="none";
    searchButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    headerBottom.style.justifyContent = "end";
    
  }

  else{
    header__bottom__bar__search.style.display = "none";
    logo.style.display ="block";
    searchButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
    headerBottom.style.justifyContent = "space-between";
  }
  
  // console.log("salom");
})



searchBtn.addEventListener("click", () => {
  if(headerBottomRight.style.display = "flex", search.style.display = "none"){
    headerBottomRight.style.display = "none"; 
    search.style.display = "flex";
  }
  
  // console.log("salom");
});

let closeSearchButton = document.getElementsByClassName("header__bottom__search__close")[0];

closeSearchButton.addEventListener("click", () => {
  console.log(window.innerWidth,"widht")
  if(headerBottomRight.style.display = "none", search.style.display = "flex"){
    headerBottomRight.style.display = "flex"; 
    search.style.display = "none";
   
    
  }

  
  // console.log("salom");
});

addPopular.addEventListener("click", () =>{
  if(popularContentResponsive.style.display =="none"){
    popularContentResponsive.style.display = "block"
    addPopular.innerText = "Yopish"
    addPopular.classList.replace("popular__content__top__link", "close")
  }

  else{
    popularContentResponsive.style.display = "none"
    addPopular.innerText = "Barchasi"
    addPopular.classList.replace("close", "popular__content__top__link")
  }
  // console.log('salom');
});

tv.addEventListener("click", () => {
  tv.style.color = "#00D74A";
  tv.style.borderColor = "#00D74A";
  mobile.style.color = "#000000";
  mobile.style.borderColor = "#fff";
  internet.style.color = "#000000";
  internet.style.borderColor = "#fff";
  formOne.innerHTML = `
    <label for="">h/r:</label>
    <input type="number" placeholder="x/r kiriting.." maxlength="9">
  `
  // console.log("salom");
});

mobile.addEventListener("click", () => {
  mobile.style.color = "#00D74A";
  mobile.style.borderColor = "#00D74A";
  tv.style.color = "#000000";
  tv.style.borderColor = "#fff";
  internet.style.color = "#000000";
  internet.style.borderColor = "#fff";
  formOne.innerHTML = `
  <label for="">998</label>
  <input type="number" placeholder="99 100-00-00" maxlength="9">
  `
})

internet.addEventListener("click", () => {
  internet.style.color = "#00D74A";
  internet.style.borderColor = "#00D74A";
  mobile.style.color = "#000000";
  mobile.style.borderColor = "#fff";
  tv.style.color = "#000000";
  tv.style.borderColor = "#fff";
  formOne.innerHTML = `
    <label for="">h/r:</label>
    <input type="number" placeholder="" maxlength="9">
  `
});

locationTop.addEventListener("click", () =>{
  if(select.style.display == "none", chevronDown.style.transform == "rotate(0deg)"){
    select.style.display = "block"
    chevronDown.style.transform = "rotate(180deg)"
  }
  else{
    select.style.display = "none"
    chevronDown.style.transform = "rotate(0deg)"
  }
  // console.log("salom");
});


option.forEach((region) => {
    region.addEventListener("click", () => {
    selectText.innerHTML=region.innerHTML;
    select.style.display = "none"
    // console.log('ishladi');
    chevronDown.style.transform = "rotate(-0deg)"
  });
});

langTop.addEventListener("click", () =>{
  if(langBottom.style.display == "none"){
    langBottom.style.display = "grid"
  }
  else{
    langBottom.style.display = "none"
  }
  // console.log("salom");
});


lang.forEach((langu) => {
  langu.addEventListener("click", () => {
    uzbek.innerHTML=langu.innerHTML;
    langBottom.style.display = "none";
    // console.log('ishladi');
});
});



let slideIndex = 1;
showSlides(slideIndex);
let paginationBack = document.querySelectorAll(".pagination__back");
let paginationNext = document.querySelectorAll(".pagination__next");


// paginationBack.forEach((back) => {
//   back.addEventListener("click", () => {
//     let n = -1
//     showSlides(slideIndex += n);
//   })
// })

// paginationNext.forEach((next) => {
//   next.addEventListener("click", () => {
//     let n=1
//     showSlides(slideIndex += n);
//   })
// })

// slideShow.forEach((show) =>{
//   let i;
//   // let slideShow = document.querySelectorAll(".slideShow");
//   if (n > slideShow.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slideShow.length}
//   for (i = 0; i < slideShow.length; i++) {
//     slideShow[i].style.display = "none";  
//   }
  
// slideShow[slideIndex-1].style.display = "block";  

// })

function plusSlides(n) {
  showSlides(slideIndex+= n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideShow");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

};


let slideIndexOne = 1;
showSlidesOne(slideIndexOne);



function showSlidesOne(n) {
  let i;
  let slidesOne = document.getElementsByClassName("slideShow__one");
  // let dots = document.getElementsByClassName("dot");
  if (n > slidesOne.length) {slideIndex = 1}    
  if (n < 1) {slideIndexOne = slidesOne.length}
  for (i = 0; i < slidesOne.length; i++) {
    slidesOne[i].style.display = "none";  
  }
  
  slidesOne[slideIndexOne-1].style.display = "block";  

};

function plusSlidesONe(n) {
  showSlidesOne(slideIndexOne += n);
}

// let slideIndexTwo = 1;
// showSlidesTwo(slideIndexTwo);

// function plusSlidesTwo(n) {
//   showSlidesTwo(slideIndexTwo += n);
// }

// function currentSlideTwo(n) {
//   showSlidesTwo(slideIndexTwo = n);
// }

function showSlidesTwo(n) {
  let i;
  let slidesTwo = document.getElementsByClassName("slideShow__Two");
  // let dots = document.getElementsByClassName("dot");
  if (n > slidesTwo.length) {slideIndexTwo = 1}    
  if (n < 1) {slideIndexTwo = slidesTwo.length}
  for (i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = "none";  
  }
  
  slidesTwo[slideIndexTwo-1].style.display = "block";  

};



