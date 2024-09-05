document.addEventListener('DOMContentLoaded', function() {
let modal = document.getElementsByClassName("modal")[0];
let openModalBtn = document.getElementsByClassName("modal-open")[0];
let closeBtn = document.getElementsByClassName("close")[0];
let okBtn = document.getElementsByClassName("button")[0];


openModalBtn.onclick = function() {
   modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}

okBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});