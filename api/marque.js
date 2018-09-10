/*jshint esversion :  6 */

// /api/marque.js

// module.exports = countryAPi;

/* jshint esversion : 6 */
const marqueAPi = function marqueAPi(connection) {
  const router = require("express").Router();
  const marqueModel = require("./../model/marque")(connection);

  router.post('/marque', (req, res) => {
    marqueModel.create((err, dataset) => {
      res.send(dataset);
    }, req.body); // post datas ici ...
  });

  router.get('/marque/', (req, res) => {
    marqueModel.get((err, dataset) => {
      res.send(dataset);
    }, req.body);
  });

  router.get('/marque', (req, res) => {
    marqueModel.get( (err, dataset) => {
      res.send(dataset);
    }, null);
  });

  router.delete('/marque', (req, res) => {
    marqueModel.remove((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset);
    }, req.body.ids); // tableau d'ids ici ...
  });

  router.patch('/marque', (req, res) => {
    marqueModel.update((err, dataset) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(dataset);
    }, req.body); // un tableau d'ids ici ...
  });

  return router;
};

module.exports = marqueAPi;

