function ajouter(){
    // Entree de valeur dans un element
    let item = document.getElementById("desc").value;          // id="desc"
    let nouveauP = document.createElement("p");                // Creer une balise <p>
    nouveauP.innerText = item;                                         // Ecrire dans le <p>
    document.getElementById("maListe").append(nouveauP);      // Ajouter le paragraphe a maListe
    let prix = document.getElementById("valeur").value;
    let nouveauS = document.createElement("span");            // Creer une balise <span>
    nouveauS.innerText = prix + "$";                                  // Ecrire dans le <span>
    nouveauP.append(nouveauS);                                        // Concatener a nouveauP

    // Mettre a jour le total
    let ancienPrix = document.getElementById("total").innerText;
    let nouveauPrix = +ancienPrix + +prix;                            // +variable : convertir en numerique
    document.getElementById("total").innerText = nouveauPrix;


    // alert("L'item est bien ajouté"); // Alerte Pop-up
}
