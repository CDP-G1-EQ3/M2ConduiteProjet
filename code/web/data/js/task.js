
// affichage des taches par sprint
(function() {
    let sprintsSelect = document.querySelector("#sprintsSelect");
    sprintsSelect.addEventListener("change", () => {
        let selectedSprintId = sprintsSelect.value;
        let tasks = document.querySelector("#taskList").children;
        for(let i=0; i<tasks.length; i++) {
            let task = tasks[i];
            let taskSprint = task.getAttribute("data-sprint");
            if (taskSprint !== selectedSprintId && selectedSprintId!=="") {
                task.style.display = "none";
            } else {
                task.style.display = "block";
            }
        }
    })
})();