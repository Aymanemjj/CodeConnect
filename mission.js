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

        document.getElementById(`mission-prix${num}`).textContent = mission.missionPrix[0]+"$ - "+mission.missionPrix[1]+"$";
        document.getElementById(`mission-dure${num}`).textContent =mission.missionDure[0]+" - " +mission.missionDure[1]+" monts";
        document.getElementById(`mission-contrat${num}`).textContent = mission.missionContrat;
    });


}

missionList();
