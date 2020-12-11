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
                task.style.display = "table-row";
            }
        }
    })
})();

let taskLines = document.querySelectorAll(".taskLine");

let taskId;

for (let i=0; i<taskLines.length; i++) {
    console.log(taskLines);
    taskLines[i].addEventListener("click", () => {
        let children = taskLines[i].children;
        console.log(children);

        let description = document.getElementById('edittask-description');
        let duration = document.getElementById('edittask-duration');
        let userStory = document.getElementById('edittask-userstory');

        userStory.value = children[1].innerText
        description.value = children[2].innerText;
        duration.value = children[4].innerText;
        taskId = children[0].innerText;
    });
}

function onEditTaskSubmit(form) {
    form.action = "/task/" + taskId;
}

function setMethod(method) {
    let methodElement = document.querySelector("#method");
    methodElement.value = method;
}