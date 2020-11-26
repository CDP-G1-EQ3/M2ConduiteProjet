let errorMsg = document.getElementById('errorMsg');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('error')) {
    errorMsg.hidden = false;
}