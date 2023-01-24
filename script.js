compteur = 4;
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

    // Creer des nouveaux input hidden dans le formulaire pour envoyer par email
    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name", "item_"+compteur);
    nouveauInput.setAttribute("value", item);
    document.forms[0].append(nouveauInput);
    compteur++;
}
function ajouterEmail() {
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}
function effacer() {
    document.forms[0].action = "";
}