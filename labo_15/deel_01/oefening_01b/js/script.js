function geefBoodschap() {
    let Voornaam = document.getElementById('voornaam').value;

    let Achternaam = document.getElementById('achternaam').value;
    let leeftijd = document.getElementById('leeftijd').value;
    let boodschap;
    if (Voornaam == "" || Achternaam == "") {
        boodschap = "U hebt niet alle gegevens ingevuld !";
    }
    else
        if (leeftijd <= 12 || leeftijd >= 60) {
            boodschap = "u behoort niet tot de gezochte leeftijdsklasse !"
        }
        else {
            boodschap = `U bent ${Voornaam} ${Achternaam} en u bent ${leeftijd} jaar oud`;
        }
    const node = document.createElement("label");
    const textnode = document.createTextNode(`${boodschap}`);
    console.log(boodschap);
    node.appendChild(textnode);
    document.getElementById("body").appendChild(node);
}

let eBoodschap = document.getElementById('boodschap');

eBoodschap.addEventListener('blur', geefBoodschap, false);
// 'blur' is één van de vele DOM events die wordt aangeroepen