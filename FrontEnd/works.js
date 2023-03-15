// récuperation des pièces depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

function genererWork(works){
    for (let i = 0; i <works.length; i++) {

        const article = works[i];

        // Récupération de l'élément du DOM accueillant les contenus générés
        const sectionGallery = document.querySelector(".gallery");

        // Création d’une balise dédiée à un contenu
        const contenuElement = document.createElement("figure");

         // Création des balises 
         const imageElement = document.createElement("img");
         imageElement.src = article.imageUrl;
         const titleElement = document.createElement("figcaption")
         titleElement.innerText = article.title;

         // On rattache les balises à la section gallery
         sectionGallery.appendChild(contenuElement);
         contenuElement.appendChild(imageElement);
         contenuElement.appendChild(titleElement);
    }
}

genererWork(works);