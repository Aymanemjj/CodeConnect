// Mode gestion
let paragraph = document.getElementById("paragraph");
let toggleSwitch = document.getElementById("toggleSwitch");
let btn_AjouterService = document.getElementById("btn_AjouterService");
let supprimer_btn = document.getElementById("supprimer_btn");
let modifier_btn = document.getElementById("modifier_btn");
let Modifier_btn = document.getElementById("Modifier_btn");
let return_btn = document.getElementById("return_btn");
let btn_annuler = document.querySelectorAll("btn_annuler");

function ModeFreelance() {
  
  if (toggleSwitch.checked) {
    paragraph.style.display = "block";
    btn_AjouterService.style.display = "block";
    supprimer_btn.style.display = "block";
    modifier_btn.style.display = "block";
    
  } else {
    paragraph.style.display = "none";
    btn_AjouterService.style.display = "none";
    supprimer_btn.style.display = "none";
    modifier_btn.style.display = "none";
  }
}
toggleSwitch.addEventListener("change", ModeFreelance);
ModeFreelance();

function navigation(){
  btn_AjouterService.addEventListener("click", function () {
  window.location.href = "ajouter_un_service.html";

});
  btn_annuler.addEventListener("click",function(){
  window.open("services.html");
})
}
navigation();



// if (modifier_btn) {
//   modifier_btn.addEventListener("click", function () {
//     window.location.href = "modifier_service.html";
//   });
// }

// return_btn.addEventListener("click", function () {
//   window.location.href = "services.html";
// });
