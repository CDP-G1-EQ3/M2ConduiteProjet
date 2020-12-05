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

        const dropzoneType = dropzone.getAttribute("data-dropzoneType");
        let url = "http://localhost/task/" + data + "/" + dropzoneType;
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

