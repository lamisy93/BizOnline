/* jshint esversion : 6 */
// ./index.js
const express = require('express');
const app = express();
const port = 8082;
const baseURL = `http://localhost:${port}`;
const api = require(__dirname + "/api")(app);
// const database = require(__dirname + "/model")(app);

// APP CONFIG !!!

app.use(express.json({extended: false})); // permet de voir les corps des requêtes

app.use(api.prefix, api.routers);
app.set('view engine', 'ejs'); // CHECK THE DOC http://ejs.co/
app.set('views', __dirname + '/view'); //  précise à express le dossier des vues
// définition de ressources statiques...
app.use('/ejs', express.static(__dirname + '/node_modules/ejs'));
app.use(express.static(__dirname + '/public'));




// TEMPLATE VARS !!!
// Accessibles dans tout le template via app.locals (API express)
app.locals.site = {};
app.locals.baseURL = baseURL;
app.locals.site.title = "JS - Gestion de stock";
app.locals.site.description = "application utilisant node, express JS, ejs et mysql.";
app.locals.site.nav = [
  // {label: "accueil", route: "/"},
];

// ROUTES DES PAGES DE l'APPLICATION

app.get('/', function(req, res) {
  res.render('index', {nom: "Ami"});
  // on passe un objet ({nom: "Ami"}) à la vue, utilisable dans le template EJS
});

// app.post('/', (req, res) => {
//   database.submit((err, dataset) => {
//     res.send(dataset);
//   }, req.body); 
//   console.log(req.body);
//   console.log(req.body.nom)
//   console.log(req.body.prix)
//   console.log(req.body.description)
//   console.log(req.body.marque)
//   console.log(res);
//   // res.send({});

// });


app.listen(port, function() {
  console.log("node server started on port " + port);
});
