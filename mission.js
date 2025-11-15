async function missionList() {

    const response = await fetch('mission.json');
    const missionsJson = await response.json();

    const missions = missionsJson.missionTable;

    let container = document.getElementById("missions");
    let details = document.getElementById('mission-details');
    console.log(details);
    missions.forEach(mission => {
        container.innerHTML += missionCard(mission);
    });

    missions.forEach(missionD => {
        details.innerHTML += detaiCard(missionD);
    });


}





missionList();
let count = 1;
// ::::::::::::::::::::::::::::med-sajouet
document.getElementById("ajoutertechno").addEventListener("click", function () {

    let technologieajt = document.getElementById("technologie-ajt");
    if (count < 5) {
        count++;
        document.getElementById("placevide").innerHTML += `<h3 class="border w-fit rounded-sm bg-slate-300 p-1 m-1">${technologieajt.value}</h3>`;
        technologieajt.value = "";
    }
})
//   :::::::::::::::::::::::::::::::::::::::::
let form = document.getElementById("form");

form.addEventListener("submit", validationformil);

function validationformil(e) {
   let tabmissionn=[];
    e.preventDefault();
    const titre = document.getElementById("titre-mission-ajt").value.trim();
    const clientenreprs = document.getElementById("client-entreprise-ajt").value.trim();
    const description = document.getElementById("description-ajt").value.trim();
    const duree = document.getElementById("duree-ajt");
    const budget = document.getElementById("budget-ajt");


<<<<<<< HEAD
    if (budget.value == '') {

        budget.style.borderColor = "red";
        return;
    } else {

        budget.style.borderColor = "green";
        

    };
    const fulname = /^[a-zA-Z]{1,30}$/;
    if (titre == '') {

        document.getElementById("titre-mission-ajt").style.borderColor = "red";
        return;
    } else {
        if (!fulname.test(titre)) {
            document.getElementById("titre-mission-ajt").style.borderColor = "red";

            return;
        } else {
            document.getElementById("titre-mission-ajt").style.borderColor = "green";

        }
    };
    if (clientenreprs == "") {
        document.getElementById("client-entreprise-ajt").style.borderColor = "red";
        return;
    } else {
        if (!fulname.test(clientenreprs)) {
            document.getElementById("client-entreprise-ajt").style.borderColor = "red";

            return;
        }
        else {
            document.getElementById("client-entreprise-ajt").style.borderColor = "green";

        }
    };
    if (description == "") {
        document.getElementById("description-ajt").style.borderColor = "red";
        return;
    } else {
        document.getElementById("description-ajt").style.borderColor = "green";

    };
    if (duree == "") {
        document.getElementById("titre-mission-ajt").style.borderColor = "red";
        return;
    } else {
        if (duree < 15 || duree > 100) {
            document.getElementById("duree-ajt").style.borderColor = "red";

            return;
        } else {
            document.getElementById("duree-ajt").style.borderColor = "green";

        }
    };
    setitemsdanslocalstorege();

}
function setitemsdanslocalstorege() {

}
=======


function missionCard(mission) {
    return `<div class="max-w-2xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        ${headerSection(mission)}
        ${descriptionSection(mission)}
        ${skillsSection(mission)}
        ${detailsSection(mission)}
        ${actionButton(mission)}
    </div>`;
}

function headerSection(mission) {
    return `<div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 id="mession-title3" class="text-2xl font-bold text-gray-800">
                            ${mission.missionName}
                        </h1>
                        <div class="mt-2 flex items-center">
                            <span id="mission-niveau3" class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                ${mission.missionNiveau}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <p id="site-name3" class="text-gray-700 font-medium">${mission.siteName}</p>
                </div>
            </div>
            `;

}

function descriptionSection(mission) {
    return `<div class="p-6 border-b border-gray-200">
                <p id="mission-description3" class="text-gray-600">
                    ${mission.missionDescription}
                </p>
            </div>`;
}

function skillsSection(mission) {
    return `<div class="p-6 border-b border-gray-200">
                <div class="flex flex-wrap gap-2">
                    ${renderSkills(mission.missionTools)}
                </div>
            </div>`;
}

function detailsSection(mission) {
    return `<div class="p-6 border-b border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex items-center">
                <i class="fas fa-dollar-sign text-gray-500 mr-2"></i>
                <span id="mission-prix3" class="text-gray-700 font-medium">
                    ${mission.missionPrix[0]}
                     - 
                    ${mission.missionPrix[1]}
                </span>
            </div>
            <div class="flex items-center">
                <i class="far fa-calendar text-gray-500 mr-2"></i>
                <span id="mission-dure3" class="text-gray-700 font-medium">
                    ${mission.missionDure[0]}
                     - 
                    ${mission.missionDure[1]}
                </span>
            </div>
            <div class="flex items-center">
                <i class="fas fa-laptop-house text-gray-500 mr-2"></i>
                <span id="mission-contrat3" class="text-gray-700 font-medium">
                    ${mission.missionContrat}
                </span>
            </div>
        </div>
    </div>
`;
}

function actionButton() {
    return `<div class="p-6 flex items-center">
        <a href="mission-postule.html"
        id="btn"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-70 rounded-lg transition duration-200">
            Apply Now
        </a>
    </div>`;
}

function renderSkills(skills) {
    let skillsContent = '';

    for (let i = 0; i < skills.length; i++) {
        skillsContent += `<span id="mission2-tool1" class="bg-gray-100 
        text-gray-800 text-sm px-3 py-1.5 rounded-full">
            ${skills[i]}
        </span>
`
    }

    return skillsContent;
}


function detaiCard() {
    return `<div class="flex flex-col justify-center gap-10 my-5 bg-gray-100">
               ${headerDeatials(mission)}
               ${detaiNiveau(missionD)}
               ${detaiClient(missionD)}
               ${detaiDescription(missionD)}
               ${renderTools(missionD)}
               ${detailTools(missionD)}
               ${detailPrix(missionD)}
               ${detailDure(missionD)}
               ${detailContrat(missionD)}
               ${detailCategorie(missionD)}
               
               
            </div>`;
}

function headerDeatials(missionD) {
    return `<div class="flex flex-row justify-center gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                    <div class="flex flex-col">
                        <span>${missionD.missionName}</span>
                        <span>${missionD.siteName}</span>
                    </div>
                </div>`;
}
function detaiNiveau(missionD) {
    return `<div class="flex flex-row items-center justify-start gap-10 mx-14">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        ${missionD.missionNiveau}
                    </span>
                </div>`

}

function detaiClient(missionD) {
    return `<div class="flex flex-row gap-4 justify-start mx-14">
                    <img class="w-10 rounded-full" src="mission1.webp" alt="">
                    <span> ${missionD.client} </span>
            </div>`;
}

function detaiDescription(missionD) {
    return `<div class="flex flex-col gap-4 justify-start mx-14">
                    <h3 class="font-bold">description</h3>
                    <p>
                        ${missionD.missionDescription}
                    </p>
            </div>`;
}

function renderTools(tool) {
    let toolContent = '';

    for (let i = 0; i < tool.length; i++) {
        toolContent += `<span class="inline-block shadow-md text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                            ${tool[i]}
                        </span>`
    }
    return toolContent;
}

function detailTools(missionD) {
    return `<div class="p-6 border-b border-gray-200">
                <div class="flex flex-wrap gap-2">
                    ${renderTools(missionD.missionTools)}
                </div>
            </div>`;
}

function detailPrix(missionD) {
    return `<div class="flex flex-row gap-10 mx-14">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div class="flex flex-col">
                        <span>Budget</span>
                        <span>$${missionD.missionPrix[0]} - $${missionD.missionPrix[1]}/month</span>
                    </div>
            </div>`;
}

function detailDure(missionD) {
    return `<div class="flex flex-row mx-14 gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>

                    <div class="flex flex-col">
                        <span>Durée</span>
                        <span>${missionD.missionDure[0]} - ${missionD.missionDure[1]} months</span>
                    </div>
            </div>`;
}

function detailContrat(missionD) {
    return `<div class="flex flex-row mx-14 gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>

                    <div class="flex flex-col">
                        <span>contrat Type</span>
                        <span> ${missionD.missionContrat} </span>
                    </div>
            </div>`;
}
function detailCategorie(missionD) {
    return `<div class="flex flex-row mx-14 gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                    <div class="flex flex-col">
                        <span>Catégorie</span>
                        <span> ${missionD.category} </span>
                    </div>
            </div>`;
}


function formValidation() {

}


>>>>>>> 6d37a9744cf1845f62262044220380a79b236cf9
