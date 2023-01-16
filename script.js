function ajouter(){
    var item = document.getElementById("desc").value;
    let nouveauP = document.createElement("p");                // Creer une balise <p>
    nouveauP.innerText = item;                                         // Ecrire dans le paragraphe
    document.getElementById("maListe").append(nouveauP);      // Ajouter le paragraphe a la liste

    // alert("L'item est bien ajouté"); // Alerte Pop-up
}
