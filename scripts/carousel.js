
window.addEventListener("load", function() {
  let pics = document.getElementsByClassName("carousel-pics");
  // document.getElementById("c-pose").style.opacity = "1.0"
  // pic = pics[pics.length - 1].id
  // console.log(pic)
  pics[pics.length - 1].style.opacity = "1.0";
  console.log("here")
  runGallery(pics);
})

function runGallery(pics) {
  console.log("here too")
  let i = 0;
  let numPics = pics.length;
  let j = numPics - 1;
  
  while (i < numPics) {
    setInterval(function () {(j, i) => {console.log(j, i)}}, 2000);
    j = i;
    i += 1;
  }
  //
  // pics[0].style.opacity = "1.0";
  // pics[2].style.opacity = "0.0";
  //
  // window.setTimeout( function () {console.log("chico is hungry");}, 20000);
  //
  // pics[0].style.opacity = "0.0";
  // pics[1].style.opacity = "1.0";

}

function changePicture(pics, j, i) {
  console.log(j, i)
  pics[j].style.opacity = "0.0";
  pics[i].style.opacity = "1.0";
}


//   document.getElementById("pals-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("pals").classList.add("show");
//   })
//   document.getElementById("lex-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("lex").classList.add("show");
//   })
//   document.getElementById("cave-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("cave").classList.add("show");
//   })
//   document.getElementById("gate-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("gate").classList.add("show");
//   })
//   document.getElementById("pals2-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("pals2").classList.add("show");
//   })
//   document.getElementById("shower-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("shower").classList.add("show");
//   })
//   document.getElementById("deer-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("deer").classList.add("show");
//   })
//   document.getElementById("pose-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("pose").classList.add("show");
//   })
//   document.getElementById("memorial-thumb").addEventListener('click', function () {
//     console.log(document.getElementsByClassName("show"))
//     document.getElementsByClassName("show")[0].classList.remove("show");
//     document.getElementById("memorial").classList.add("show");
//   })
// }