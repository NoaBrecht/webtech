let actie = document.getElementById('myAction');

actie.addEventListener('blur', AddtoLog, false);

function AddtoLog() {
    console.log("Er werd op mij geklikt!")
}