/* jshint esversion : 6 */
// ./public/js/app.js

console.log("hello app JS front side");

(function() {
    "use strict";

    // var produitToDelete = [];
    // var marqueToDelete = [];

    // var stockproduits = [];
    // var stockmarques = [];
    
/** 
 *@function doAjax
 * @param url {string} - L'url de la reponse.
 * @param method {string} - La methode utilisée.
 * @param callback {string} - La fonction callback.
 * @param data {string} - Les données traitées.
 *Elle permet le traitement des fonctions en asynchrone.
 */
    const doAjax = function doAjax(url, method, callback, data) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            data = data ? JSON.stringify(data) : null;
            if (method.toLowerCase() === "post") {
                if (!data) throw new Error('bad call');
            }
            xhr.onload = evt => callback(evt.target.response || evt.srcElement.response);
            xhr.send(data);
        } catch (err) {
            console.log(err);
        }
    };

/** 
 *@function createProduit
 *@param event {string} - L'évènement au clic du bouton.
 *Elle permet la creation de produits dans une base de données par le biais de la methode "post"
 */

    const createProduit = function createProduit(e) {
        //return console.log(e)
        e.preventDefault();
    
//        return console.log("ici tout va bien")
        const url = "http://localhost:8082/api/v1/produit";
        doAjax(url, "POST", res => {
            // window.alert("produit ajouté");
            // console.log(JSON.parse(res));
        }, {
            nom: document.getElementById("nomproduit").value,
            prix: document.getElementById("prixproduit").value,
            description: document.getElementById("description").value,
            // marque: document.getElementById("marqueproduit").value
        });
        
    };

/** 
 *@function getProduit
 *@param null
 *Elle permet de récupérer les données concernant les produits envoyées au serveur.
 */

    const getProduit = function getProduit() {
        const url = "http://localhost:8082/api/v1/produit";
        doAjax(url, "GET", res => {
            // console.log(JSON.parse(res));
            displayProduit(JSON.parse(res));
        });
    }

/** 
 *@function displayProduit 
 *@param null
 *Elle permet d'afficher dans un tableau les données récoltées dans le formulaire produit.
 */

    const displayProduit = function displayProduit(tableau) {
        // stockproduits.push(new Produit(nom, prix, description));
        // stockproduits.push(nom, prix, description, marque);
        console.log(tableau);

        tableau.forEach(function(e) {
            console.log(e);
            var tbody1 = document.getElementById("tbodyproduits");
            var ligne1 = tbody1.insertRow();
            var colonne1 = ligne1.insertCell(0);
            colonne1.innerHTML = e.nom;
            colonne1.contentEditable = "true";
            var colonne2 = ligne1.insertCell(1);
            colonne2.innerHTML = e.marque;
            colonne2.contentEditable = "true";
            var colonne3 = ligne1.insertCell(2);
            colonne3.innerHTML = e.prix;
            colonne3.contentEditable = "true";
            var colonne4 = ligne1.insertCell(3);
            colonne4.innerHTML = e.description;
            colonne4.contentEditable = "true";
            var colonne5 = ligne1.insertCell(4);
            colonne5.innerHTML = "❌";
            var img = document.createElement('img');
            img.src = "/images/icon.png";
            // x.appendChild(img);
            var colonne6 = ligne1.insertCell(5);
            colonne6.innerHTML = img;
        });
        
        // ActiveSuppr();
        // ActiveEdit();
    }

/** 
 *@function createMarque
 *@param event {string} - L'évènement au clic du bouton.
 *Elle permet la creation de marques dans une base de données par le biais de la methode "post".
 */

    const createMarque = function createMarque(event) {
        event.preventDefault();
//        return console.log("ici tout va bien")
        const url = "http://localhost:8082/api/v1/marque";
        doAjax(url, "POST", res => {
            // window.alert("marque ajoutée");
            // console.log(JSON.parse(res));
        }, {
            nom: document.getElementById("nommarque").value,
        });
  
    };

    /** 
     *@function getMarque 
     *@param null
     *Elle permet de récupérer les données concernant les marques envoyées au serveur.
     */

        const getMarque = function getMarque() {
        const url = "http://localhost:8082/api/v1/marque";
        doAjax(url, "GET", res => {
            // console.log(JSON.parse(res));
            displayMarque(JSON.parse(res));
        });
    }

/** 
 *@function displayMarque 
 *@param null
 *Elle permet d'afficher dans un tableau les données récoltées dans le formulaire marque.
 */

    const displayMarque = function displayMarque(tableau) {
              
        // stockmarques.push(new Marque(nom2));
        // stockmarques.push(nom2);

            console.log(tableau);

            tableau.forEach(function(e) {
              console.log(e);
              var tbody2 = document.getElementById("tbodymarques");
              var ligne2 = tbody2.insertRow();
              var col1 = ligne2.insertCell(0);
              col1.innerHTML = e.nom;
              col1.contentEditable = "true";
              var col2 = ligne2.insertCell(1);
              col2.innerHTML = "❌";
              var img = document.createElement('img');
              img.src = "/images/icon.png";
              var col3 = ligne2.insertCell(2);
              col3.innerHTML = img; 
            });
    

    
        // console.log(stockmarques);
        
        // ActiveSuppr();
        // ActiveEdit();
    };

    // const deleteProduit = function deleteProduit() {

    //     const url = "http://localhost:8082/produit";
    //     doAjax(url, "DELETE", res => {
    //         console.log(JSON.parse(res));
    //         JSON.parse(res);
    //     }, ids = produitToDelete);

    // };

        // const deleteMarque = function deleteMarque() {

    //     const url = "http://localhost:8082/marque";
    //     doAjax(url, "DELETE", res => {
    //         console.log(JSON.parse(res));
    //         JSON.parse(res);
    //     }, ids = marqueToDelete);

    // };

    // function supprimer() {
	//     this.parentNode.remove();
	// };

    // function ActiveSuppr() {
	//     supprTd = document.querySelectorAll('#tbody td:nth-last-of-type(2)');
	//     supprTd.forEach(function (td) {
	//         td.addEventListener("click", supprimer)
	//     });
    // };

    // function edit() {
	//     // this.
    // };
    

    // const editProduit = function editProduit() {

    //     const url = "http://localhost:8082/produit";
    //     doAjax(url, "PATCH", res => {

    //     }, );


    // };

        // const editMarque = function editMarque() {

    //     const url = "http://localhost:8082/marque";
    //     doAjax(url, "PATCH", res => {

    //     }, );


    // };
    
    // function ActiveEdit() {
	//     lastTd = document.querySelectorAll('#tbody td:last-child');
	//     lastTd.forEach(function (td) {
	//         td.addEventListener("click", edit)
	//     });
    // };
    
/** 
 *@function start 
 *@param null
 *Elle permet d'executer les fonctions createProduit(), getProduit(), createMarque(), getMarque() au clic.
 */

    const start = function start() {
        
        const btnproduit = document.getElementById("btnproduit");
        const btnmarque = document.getElementById("btnmarque");
        if (btnproduit)
        btnproduit.onclick = function(evt) {
            createProduit(evt);
            getProduit();
        };
        if (btnmarque) 
        btnmarque.onclick = function(evt) {
            createMarque(evt);
            getMarque();
        };

        getProduit();
        getMarque();

    };

    window.addEventListener("DOMContentLoaded", start);
}());