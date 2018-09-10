/* jshint esversion : 6 */

// /api/index.js

// ROUTAGE DE L'API
const api = function api(app) {

  const APIVersion = 1;

  const database = require(__dirname + "/../model")({
    user: 'root',
    password: "",
    database: "stock",
    socketPath: '/Applications/WAMP/tmp/mysql/mysql.sock' // base de donnée cible
  });

  // app.use(`/api/v${APIVersion}`, produitRouter); // on préfixe les routes de l'API

  // ROUTES DE l'API COUNTRY
  // const countryRouter = require("./country")(database.connection);
  //. app.use(`/api/v${APIVersion}`, countryRouter);

  // ETC...

      // IMPORT DES ROUTES DE l'API produit
      const routers = []; // on expotera ce tableau une fois rempli
      const produitRouter = require("./produit")(database.connection); // modulariser API produit
      // IMPORT DES ROUTES DE l'API marque
      const marqueRouter = require("./marque")(database.connection);
  
      routers.push(produitRouter); // aggrégation des routeurs dans un tableau
      routers.push(marqueRouter);
  
      return { // définition des propriétés publiques du module /api/index.js
          version: APIVersion,
          prefix: `/api/v${APIVersion}`,
          routers: routers
      }; // on récupère ces valeurs dans @root/index.js
  };

module.exports = api;
