// referanser til modalen/variabler for elements
const modal = document.getElementById("modalId");
// til alle bildene, må bruke class istedet for id.
const bilder = document.getElementsByClassName("images");
// bildet som er i modal
const modalBilde = document.getElementById("img");
// caption teksten som skal vises i modal
const altText = document.getElementById("caption");

// loop`e igjennom alle bildene som har images classen
for (let i = 0; i < bilder.length; i++) {
  let img = bilder[i];
  // legg til onclick event på hver enkelt bilde.
  img.onclick = function () {
    modal.style.display = "block";
    modalBilde.src = this.src;
    altText.innerHTML = this.alt;
    console.log(modalBilde);
  };
}

const spanIcon = document.getElementsByClassName("closemodal")[0];

spanIcon.onclick = function () {
  modal.style.display = "none";
};
