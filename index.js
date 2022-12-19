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
  navbar.style.width = "75%";
  navbar.style.display = "flex";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

function closeNav() {
  navbar.style.width = "0";
  navbar.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
};

headerBottomBar.addEventListener("click", () =>{
  if(navbar.style.display ==="none"){
    openNav()
  }
  else{
    closeNav()
  }
})

// searchButton.addEventListener("click", () =>{
//   if(search.style.display = "none"){
//     // search.style.margin = "0px 30px 0 0"
//     search.style.display = "flex";
//     header__bottom__bar.style.display = "none";
//   }
  
//   console.log("salom");
// })



searchBtn.addEventListener("click", () => {
  if(headerBottomRight.style.display = "flex", search.style.display = "none"){
    headerBottomRight.style.display = "none"; 
    search.style.display = "flex";
  }
  
  console.log("salom");
});

let closeSearchButton = document.getElementsByClassName("header__bottom__search__close")[0];

closeSearchButton.addEventListener("click", () => {
  // if(window.innerWidth,"768px")
  console.log(window.innerWidth,"widht")
  if(headerBottomRight.style.display = "none", search.style.display = "flex"){
    headerBottomRight.style.display = "flex"; 
    search.style.display = "none";
    // header__bottom__bar.style.display = "block";
    
  }

  
  console.log("salom");
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
  console.log('salom');
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
  console.log("salom");
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
  console.log("salom");
});


option.forEach((region) => {
    region.addEventListener("click", () => {
    selectText.innerHTML=region.innerHTML;
    select.style.display = "none"
    console.log('ishladi');
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
  console.log("salom");
});


lang.forEach((langu) => {
  langu.addEventListener("click", () => {
    uzbek.innerHTML=langu.innerHTML;
    langBottom.style.display = "none";
    console.log('ishladi');
});
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideShow");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

};

let slideIndexOne = 1;
showSlidesOne(slideIndexOne);

function plusSlidesONe(n) {
  showSlidesOne(slideIndexOne += n);
}

function currentSlidesOne(n) {
  showSlidesOne(slideIndexOne = n);
}

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



