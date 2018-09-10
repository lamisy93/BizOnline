/* jshint esversion : 6 */

// /model/marque.js

// module.exports = {
//   typicalAnswer: 42
// };


const marqueModel = function marqueModel(connection) {

  const create = function createMarque(clbk, data) {
    const q = "INSERT INTO marques (nom) VALUES (?)";
    const payload = [data.nom2];

    connection.query(q, payload, (err, res, cols) => {
      console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const remove = function deleteMarque(clbk, ids) {
    // la clause SQL IN permet de chercher une valeur dans un tableau
    const q = "DELETE FROM marques WHERE id IN (?)";

    connection.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  const update = function editMarque(clbk, produit) {
    const q = "UPDATE marques SET nom = ? WHERE id = ?";
    const payload = [marques.nom2, marques.id];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getMarque(clbk, id) {
    var sql;

    if (id && !isNaN(id)) {
      sql = "SELECT * FROM marques WHERE id = ?";
    } else {
      sql = "SELECT * FROM marques";
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

module.exports = marqueModel;
