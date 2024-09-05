document.addEventListener('DOMContentLoaded', function() {
let modal = document.getElementsByClassName("modal")[0];
let openModalBtn = document.getElementsByClassName("modal-open")[0];
let closeBtn = document.getElementsByClassName("close")[0];
let okBtn = document.getElementsByClassName("button")[0];
let bodyTag = document.getElementsByTagName("body")[0];


openModalBtn.onclick = function() {
   modal.style.display = "block";
   bodyTag.style.overflow = "hidden";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
    bodyTag.style.overflow = "auto";
}

okBtn.onclick = function() {
    modal.style.display = "none";
    bodyTag.style.overflow = "auto";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      //  bodyTag.style.overflow = "auto";
    }
}
});