const formulaire = document.getElementById("clientForm");
const listeClients = document.getElementById("clientList");
const message = document.getElementById("message");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    // Récupération des valeurs
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;
    const email = document.getElementById("email").value;

    // Création d'une nouvelle ligne
    const ligne = document.createElement("tr");

    ligne.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${telephone}</td>
        <td>${adresse}</td>
        <td>${email}</td>
    `;

    // Ajouter la ligne au tableau
    listeClients.appendChild(ligne);

    // Message
    message.textContent = "Client ajouté avec succès !";
    message.style.color = "green";

    // Vider le formulaire
    formulaire.reset();

});