const config = require("../config");
const dbConfig = config.db;
const mysql = require("mysql2");
const {Weapons} = require("../models/Weapons");
const {Heroes} = require("../models/Heroes");
const {Hospital} = require("../models/Hospital");
// const {Schema} = require("../models/Test");
const {createTable, createProcedure, alterTable} = require("../service/model.service");


const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

const getDB = () => connection;


// createTable(getDB, "test", Schema);

createTable(getDB, "weapons", Weapons);
createTable(getDB, "heroes", Heroes);
createTable(getDB, "hospital", Hospital);

createProcedure(connection);
alterTable(connection);




module.exports = getDB;
