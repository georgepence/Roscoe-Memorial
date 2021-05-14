
window.addEventListener("load", function() {
  let pics = document.getElementsByClassName("carousel-pics");
  pic[pic.length - 1].style.opacity = "1.0";
  runGallery(pics);
})

function runGallery(pics) {
  while (true) {
    for (let pic in pics) {
      for (let opac = 0.0; opac <= 1.0; opac += 0.1) {
        pic.style.opacity = toString(opac);
        setTimeout(200)
      }
    }
  }
  document.getElementById("pals-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("pals").classList.add("show");
  })
  document.getElementById("lex-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("lex").classList.add("show");
  })
  document.getElementById("cave-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("cave").classList.add("show");
  })
  document.getElementById("gate-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("gate").classList.add("show");
  })
  document.getElementById("pals2-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("pals2").classList.add("show");
  })
  document.getElementById("shower-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("shower").classList.add("show");
  })
  document.getElementById("deer-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("deer").classList.add("show");
  })
  document.getElementById("pose-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("pose").classList.add("show");
  })
  document.getElementById("memorial-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("show"))
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("memorial").classList.add("show");
  })
}