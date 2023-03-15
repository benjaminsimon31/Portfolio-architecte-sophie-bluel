const reponse = await fetch("http://localhost:5678/api/works");
const filters = await reponse.json();

function genererFilters(filters){
    // on fait un tableau contenant uniquement les noms qu'on veut utiliser comme filtres à partir du JSON 
    const arrayFilters = []
    for (let i = 0; i < filters.length; i++){
        const article = filters[i];
        arrayFilters.push(article.category.name);     
        // console.log(arrayFilters);   
    }

    // on retire les doublons du tableau arrayFilters
    const setFilters = new Set(arrayFilters); 
    const usefullFilters = Array.from(setFilters);
    console.log(usefullFilters);

    for (let i = 0; i < usefullFilters.length; i++){

            // Récupération de l'élément du DOM accueillant les contenus générés
            const sectionGallery = document.querySelector(".filters");
            // Création d’une balise dédiée à un contenu
            const filtersElement = document.createElement("button");
            //on itere le contenu de notre html avec le tableau usefullFilters débarassé des doublons
            filtersElement.innerText = usefullFilters[i];

            // On rattache les balises à la section gallery
            sectionGallery.appendChild(filtersElement);
        }
    }

genererFilters(filters);