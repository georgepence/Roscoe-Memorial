
window.addEventListener("load", function() {
  document.getElementById("pose").classList.add("show");
  addScrollListeners();
})

function addScrollListeners() {
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
}

