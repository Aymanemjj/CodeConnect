let paragraph = document.getElementById("paragraph");
let toggleSwitch = document.getElementById("toggleSwitch");
let btn_AjouterService = document.getElementById("btn_AjouterService");
let supprimer_btn = document.getElementById('supprimer_btn');
let modifier_btn = document.getElementById('modifier_btn');
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
toggleSwitch.addEventListener('change', ModeFreelance);
ModeFreelance();
