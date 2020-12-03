let backlogLines = document.querySelectorAll(".backlogLine");
let infosUs = document.querySelector("#infosUs");
let btnFermer = document.querySelector("#fermer");

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
        let priority = document.querySelector("#priority");

        description.value = children[0].children[1].innerText;
        priority.value = children[1].children[1].innerText;

        for(let j=0; j<importance.options.length; j++) {
            if (importance.options[j].innerText === children[1].children[0].innerText) {
                importance.selectedIndex = j;
                break;
            }
        }
        usId = children[0].children[0].innerText;
        infosUs.style.display = "block";
    });
}

function onFormSubmit(form) {
    form.action = "/backlog/us/" + usId;
}