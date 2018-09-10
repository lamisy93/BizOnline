/*jshint esversion :  6 */

// /model/produit.js

const produitModel = function produitModel(connection) {

  const create = function createProduit(clbk, data) {
    const q = "INSERT INTO produits (nom, description, prix) VALUES (?, ?, ?)";
    const payload = [data.nom, data.description, data.prix];

    connection.query(q, payload, (err, res, cols) => {
      console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const remove = function deleteProduit(clbk, ids) {
    // la clause SQL IN permet de chercher une valeur dans un tableau
    const q = "DELETE FROM produits WHERE id IN (?)";

    connection.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  const update = function editProduit(clbk, produit) {
    const q = "UPDATE produits SET nom = ?, description = ?, prix = ?, WHERE id = ?";
    const payload = [produits.nom, produits.description, produits.prix, produits.id];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getProduit(clbk, id) {
    var sql;

    // const q = "SELECT * FROM marques INNER JOIN marques ON marques.nom = produits.id_marques";
    // const payload = [marques.nom, produits.id_marques];

    if (id && !isNaN(id)) {
      sql = "SELECT * FROM produits WHERE id = ?";
    } else {
      sql = "SELECT * FROM produits";
    }

    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    create,
    remove,
    update,
    get
  };
};

module.exports = produitModel;
