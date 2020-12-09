let backlogLines = document.querySelectorAll(".backlogLine");
let infosUs = document.querySelector("#infosUs");
let btnFermer = document.querySelector("#fermer");
let diffRangeUpdateUs = document.querySelector("#difficulty");
let diffDisplayUpdateUs = document.querySelector("#diffDisplay");
let diffRangeCreateUs = document.querySelector("#createUsDifficulty");
let diffDisplayCreateUs = document.querySelector("#createUsDiffDisplay");

infosUs.style.display = "none";

btnFermer.addEventListener("click", () => {
    infosUs.style.display = "none";
});

function setMethod(method) {
    let methodElement = document.querySelector("#method");
    methodElement.value = method;
}

let usId;

for (let i=0; i<backlogLines.length; i++) {
    backlogLines[i].addEventListener("click", () => {
        let children = backlogLines[i].children;
        console.log(children);

        let description = document.querySelector("#description");
        let importance = document.querySelector("#importance");
        let difficultyRange = document.querySelector("#difficulty");
        let difficultyDisplay = document.querySelector("#diffDisplay");
        

        description.value = children[1].innerText;
        difficultyRange.value = children[3].innerText;
        displayDifficulty(difficultyDisplay, difficultyRange.value);


        for(let j=0; j<importance.options.length; j++) {
            if (importance.options[j].innerText === children[2].innerText) {
                importance.selectedIndex = j;
                break;
            }
        }
        usId = children[0].innerText;
        infosUs.style.display = "block";
    });
}

function onFormSubmit(form) {
    form.action = "/backlog/us/" + usId;
}

//----------------------- modal start sprint
function submitStartSprintForm(form) {
    form.action = "/sprint/start/";
}

(function() {
    let btnShowStartSprintModal = document.querySelectorAll(".btnShowStartSprintModal");
    console.log(btnShowStartSprintModal)
    btnShowStartSprintModal.forEach(btn => {
        btn.addEventListener("click", () => {
            let sprintIdInput = document.querySelector("#sprintId");
            sprintIdInput.setAttribute("value", btn.getAttribute("data-sprintId"));
            console.log(sprintIdInput);
        });
    });
})();
    

//------------------------ drag and drop
let listItems = document.querySelectorAll(".draggable");

for (let i=0; i<listItems.length; i++) {
    listItems[i].addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text", ev.target.id)
        console.debug("drag start");
    });
}


let sourceAndDestinationElements = document.querySelectorAll(".sourceAndDestination");
console.log(sourceAndDestinationElements)

sourceAndDestinationElements.forEach(element => {
    console.log("sourceDest")
    element.addEventListener("drop", (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let dropzone = ev.target;
        while (!dropzone.className.includes("sourceAndDestination")) {
            dropzone = dropzone.parentNode;
        }
        dropzone.appendChild(document.getElementById(data));
        console.log("target", dropzone);
        console.log("droped");

        const dragged = document.getElementById(data);
        const usId = dragged.children[0].innerText;
        const usSprint = dropzone.getAttribute("data-sprintId");
        console.log(usSprint);
        let url = "http://localhost/sprint/" + usId + "/" + usSprint;
        fetch(url, {
            method: "post",
        }).then(() => {
            location.reload();
        })
        .catch(error => console.log("error: " + error));
    })

    element.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        console.log("dragover");
})
});

diffRangeUpdateUs.addEventListener('input', () => {
    displayDifficulty(diffDisplayUpdateUs, diffRangeUpdateUs.value);
});

diffRangeCreateUs.addEventListener('input', () => {
    displayDifficulty(diffDisplayCreateUs, diffRangeCreateUs.value);
});

function displayDifficulty(display, value) {
    display.innerHTML = value;
}

(function() {
    let usStateSelect = document.querySelectorAll(".usState");
    for (let i=0; i<usStateSelect.length; i++ ) {
        usStateSelect[i].addEventListener("change", async () => {
            let usId = usStateSelect[i].getAttribute("data-usId");
            console.log(usId);
            await fetch("/sprint/us/" + usId + "/" + usStateSelect[i].value, {
                method: "POST"
            });
        })
    }
}) ();

async function closeSprint(button) {
    await fetch("/sprint/" + button.getAttribute("data-sprintId"), {
        method: "PUT"
    });

    infosUs.style.display = "none";
    location.reload();
}