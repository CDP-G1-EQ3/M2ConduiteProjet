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
        let children = backlogLines[i].childNodes;
        let description = document.querySelector("#description");
        let importance = document.querySelector("#importance");
        let priority = document.querySelector("#priority");

        description.value = children[3].innerText;
        priority.value = children[7].innerText;

        for(let j=0; j<importance.options.length; j++) {
            if (importance.options[j].innerText === children[5].innerText) {
                importance.selectedIndex = j;
                break;
            }
        }
        usId = children[1].innerText;
        infosUs.setAttribute("action", "/backlog/us/" + children[1].innerText);
        console.log("action: ", infosUs.getAttribute("action"));
        infosUs.style.display = "block";
    });
}

function onFormSubmit(form) {
    form.action = "/backlog/us/" + usId;
}