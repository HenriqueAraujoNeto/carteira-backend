const app = require("express")();
const consign = require('consign');
const db = require('./config/db');

app.db = db;

var porta = process.env.PORT || 8080;

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(porta, () => {
    console.log("Backend executando na porta 3600...");
});