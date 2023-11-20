function geefBoodschap() {
    let Voornaam = document.getElementById('voornaam').value;
    let Achternaam = document.getElementById('achternaam').value;
    let leeftijd = document.getElementById('leeftijd').value;
    const node = document.createElement("label");
    const textnode = document.createTextNode(`U bent ${Voornaam} ${Achternaam} en u bent ${leeftijd} jaar oud`);
    node.appendChild(textnode);
    document.getElementById("body").appendChild(node);
}

let eBoodschap = document.getElementById('boodschap');

eBoodschap.addEventListener('blur', geefBoodschap, false);
// 'blur' is één van de vele DOM events die wordt aangeroepen