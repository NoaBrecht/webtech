const node = document.createElement("li");
const textnode = document.createTextNode("Nieuw element");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);