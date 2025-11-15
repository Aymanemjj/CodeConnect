
// let imgFLCE = document.getElementById("imgprofile");
let section3= document.getElementById("section-profile");
let section12= document.getElementById("deux-section");
let section2= document.getElementsByClassName("section-freelance");
section3.style.display="none";

let users=[];
let ix;
async function getText() {
  let donne = "profileFLance.json";
  let x = await fetch(donne);
  let user = await x.json();
  users=[...user];
  console.log(users.keys)
    populateProfiles(users)
}
getText();
 


function populateProfiles(users) {
  const container1 = document.getElementById("freelancers-list");
 
  users.forEach((freelancer, index) => {
    container1.innerHTML += `<div class="flex flex-col hover:shadow-black shadow-xl hover:bg-red-50 gap-8 h-90 w-80 bg-slate-50 p-4 rounded-xl items-center">
                <button class="flex flex-col items-center cursor-pointer" type="button" onclick="populateprofile(${index})">
                <div class="border-red-600 border-2 h-30 shadow-xl bg-cover bg-[url(${freelancer.imageProfile})] shadow-orange-100 w-30 rounded-[50%] bg-green-100"></div>
                <div class="flex flex-col gap-4 items-center">
                    <h2 class="font-bold  w-auto">${freelancer.fullname}</h2>
                    <div class="border rounded-xl p-2 bg-orange-200 "><h2>${freelancer.speciality}</h2></div>
                      <div class="flex items-center"><i class="fa-solid fa-star" style="color: #FFD43B;"></i><p>4.5</p></div>
                    <div class="font-serif text-lg"><span>${freelancer.tarif}</span>€/heure</div>
                </div></button>
           </div>`
  });
}
 
function populateprofile(index) {
  let userTargeted = users[index];
//  getText();
 section3.style.display="block";
  section12.style.display="none";
  // section2.style.display="none";
  
  // console.log(users[index].fullname); 
  document.getElementById("description").textContent=users[index].description;
document.getElementById("tarifa").textContent=users[index].tarif;         
document.getElementById("specialitee").textContent=users[index].speciality;
document.getElementById("imgprofile").classList.add(`bg-[url(${users[index].imageProfile})]`);
document.getElementById("nameFLance").textContent=users[index].fullname;
const contener2= document.getElementById("contenair");
const contenair3= document.getElementById("contenair3");
const contenaire4= document.getElementById("projects");
  



   userTargeted.skillsProgramming.forEach(skill=> {
      contener2.innerHTML+=`<div class="h-30 w-30 bg-slate-300 rounded-xl flex justify-center items-center flex-col">
                            <div class="h-18 w-17 bg-cover rounded-md flex-col bg-[url(${skill.image})]"></div>
                            <h3  id="fullnme" class="font-black">${skill.name}</h3>
                        </div>`

    });
    
  userTargeted.skillsGraphic.forEach(skills=>{                 
   contenair3.innerHTML+=` <div class="h-30 w-30 bg-slate-300 rounded-xl flex justify-center items-center flex-col">
                       <div class="h-18 w-17 bg-cover rounded-md flex-col bg-[url(${skills.image})]"></div>
                      <h3 class="font-black">${skills.name}</h3>
                  </div>`});

   userTargeted.project.forEach(projet=>{                 
   contenaire4.innerHTML+=`  <div class="flex flex-col p-4 items-center m-2 h-40  bg-gray-400 rounded-xl ">
                    <div class="flex items-center ">
                        <i class="fa-solid fa-globe fa-lg" style="color: #2369e1;"></i>
                        <h3 class="text-white font-serif">${projet.name}</h3>
                    </div>
                    <div class="mt-3 w-40">
                        <p class="text-sm">${projet.description}</p>
                    </div>
                </div>`});

}
   
//     
 