// Mode gestion
let paragraph = document.getElementById("paragraph");
let toggleSwitch = document.getElementById("toggleSwitch");
let btn_AjouterService = document.getElementById("btn_AjouterService");

let Modifier_btn = document.getElementById("Modifier_btn");
let return_btn = document.getElementById("return_btn");
let btn_annuler = document.querySelectorAll("btn_annuler");
const filterCategorie = document.getElementById('trier_Categorie');
let optionsCategorie = document.querySelectorAll(".options");


function ModeFreelance() {
let supprimer_btn = document.querySelectorAll(".supprimer_btn");
let modifier_btn = document.querySelectorAll(".modifier_btn");

  if (toggleSwitch.checked) {
    paragraph.style.display = "block";
    btn_AjouterService.style.display = "block";

    modifier_btn.forEach((element) => {
      element.classList.replace("hidden", "block");
    });
    supprimer_btn.forEach((element) => {
      element.classList.replace("hidden", "block");
    });
  } else {
    paragraph.style.display = "none";
    btn_AjouterService.style.display = "none";
    supprimer_btn.forEach((element) => {
      element.classList.replace("block", "hidden");
    });
    modifier_btn.forEach((element) => {
      element.classList.replace("block", "hidden");
    });
  }
}
toggleSwitch.addEventListener("change", ModeFreelance);
ModeFreelance();

// function navigation() {
//   btn_AjouterService.addEventListener("click", function () {
//     window.location.href = "ajouter_un_service.html";
//   });
//   btn_annuler.addEventListener("click", function () {
//     window.open("services.html");
//   });
// }
// navigation();

// trier par categorie
let categories = [];
filterCategorie.addEventListener('change', function(){
  const selectCategorie = this.value;
  filterCategorie.forEach(optionsCategorie=>{
  // console.log(hi);
  
  })



})
// function trierParCategorie() {
//   let trierCategorie = document.getElementById("trier_Categorie");
//   trierCategorie.addEventListener("change", function () {});
// }


// JSON
async function listServices() {
  try {
    let response = await fetch('json/services.json');
    let data = await response.json();
    services = data.services;
    afficherServices(services);
  } catch (error) {
    console.error('Erreur', error);
  }
}
listServices();
let services = [];

// afficher les services
function afficherServices(){
  const countiner = document.getElementById('list_Services');
  // countiner.innerHTML = '';
  
  services.forEach(service =>{
    const cartService = document.createElement('div');
    cartService.className = 'px-3 py-5 border w-96 rounded-lg shadow-xl';
    cartService.innerHTML = `
      <div class="flex justify-between">
        <div>
          <label class="categorie text-sm font-semibold bg-gray-200 p-1 rounded-xl">${service.categorie}</label>
          <p class="py-3">${service.titre}</p>
        </div>
        <div class="text-xl flex">
          <div class="modifier_btn hidden rounded hover:text-green-600">
          <a href="" class="cursor-pointer">
                <i class="fa-solid fa-pencil cursor-pointer" data-id="${service.id}"></i>
              </a>
            
          </div>
          <div class="supprimer_btn hidden hover:text-red-600 pl-2">
          <a href="" class="cursor-pointer">
                <i class="fa-solid fa-trash cursor-pointer" data-id="${service.id}"></i>
              </a>
          </div>
        </div>
      </div>

      <div class="text-gray-500 pb-2">
        <i class="fa-regular fa-user"></i>
        <label>${service.freelance}</label>
      </div>
      <p class="py-8 text-gray-500">${service.description}</p>
      <div class="text-sm flex gap-4 pb-6">
        ${service.competences.map(comp => `<span class="border rounded-2xl px-2 py-1">${comp}</span>`).join('')}
      </div>
      <div class="h-0.5 bg-gray-200 my-5"></div>
      <div class="flex justify-between">
        <div class="flex text-center">
          <div class="text-xl text-green-600">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <div class="text-green-600 flex">
            <p class="pr-1">${service.prix}</p>
            <span class="pr-2">USD</span>
            <span class="text-gray-500">/ ${service.unite_prix}</span>
          </div>
        </div>
        <div class="flex text-gray-500">
          <div class="pr-1">
            <i class="fa-regular fa-clock"></i>
          </div>
          <p>${service.delai}</p>
        </div>
      </div>
    `;
    countiner.appendChild(cartService);
  })
  
}
afficherServices()
