async function missionList() {

    const F = await fetch('mission.json');
    const data = await F.json();

    const missions = data.missionTable;

    missions.forEach((mission, index) => {
        const num = index + 1;

        document.getElementById(`mession-title${num}`).textContent = mission.missionName;
        document.getElementById(`mission-niveau${num}`).textContent = mission.missionNiveau;
        document.getElementById(`site-name${num}`).textContent = mission.siteName;
        document.getElementById(`mission-description${num}`).textContent = mission.missionDescription;

        for (let i = 0; i < mission.missionTools.length; i++) {
            const toolId = `mission${num}-tool${i + 1}`;
            const toolElement = document.getElementById(toolId);
            if (toolElement) {
                toolElement.textContent = mission.missionTools[i];
            }
        }

        document.getElementById(`mission-prix${num}`).textContent = mission.missionPrix[0] + "$ - " + mission.missionPrix[1] + "$";
        document.getElementById(`mission-dure${num}`).textContent = mission.missionDure[0] + " - " + mission.missionDure[1] + " monts";
        document.getElementById(`mission-contrat${num}`).textContent = mission.missionContrat;
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
