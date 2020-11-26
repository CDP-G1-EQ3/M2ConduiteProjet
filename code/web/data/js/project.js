let searchBar = document.getElementById('searchProject');
let projectList = document.getElementById('projectList');
const projectsSave = projectList.cloneNode(true);

searchBar.addEventListener('keyup', () => {
    let projects = projectsSave.cloneNode(true).children;
    const search = searchBar.value;
    let result = [];
    if (search == "") {
        projectList.innerHTML = projectsSave.innerHTML;
        return;
    } else {
        for (project of projects) {
            if (project.textContent.toLowerCase().includes(search.toLowerCase())) {
                result.push(project);
            }
        }
    }
    projectList.innerHTML = '';
    result.forEach(project => projectList.appendChild(project));
});