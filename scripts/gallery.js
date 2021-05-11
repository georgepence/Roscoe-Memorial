
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
}

