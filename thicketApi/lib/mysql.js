const CONFIG = require("../config")

const knex = require('knex')(CONFIG.mysql);

module.exports=knex