
window.addEventListener("load", function() {
  document.getElementById("pose").classList.add("active");
  addScrollListeners();
})

function addScrollListeners() {
  document.getElementById("pals-thumb").addEventListener('click', function () {
    console.log(document.getElementsByClassName("active"))
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById("pals").classList.add("active");
  })
}

