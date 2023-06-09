const runQuery = require("../database/runQuery");
const { Queries } = require("../database/Queries");


async function findAll({tableName, ReftableName ,SELECT,myTableKey, refTableKey}) {

    if(!ReftableName){
        let query = Queries.command_findAll
        .replace("<table_name>", tableName);
        return runQuery(query);
    }

    let query = Queries.command_findAll_InnerJoin
    .replace("<key_value>", SELECT || "*")
    .replace("<mytable_name>", tableName)
    .replace("<ref_table_name>", ReftableName)
    .replace("<mytable_name_dot_key>", myTableKey)
    .replace("<ref_table_name_dot_key>", refTableKey);
    return runQuery(query);
   
}


async function createOne(tableName, keys, values) {

    let result = "";
    for (let i = 0; i < values.length; i++) {
      result += "?,";
    }
    
    return runQuery(Queries.command_create
        .replace("<table_name>", tableName) 
        .replace("<key_value>", keys)
        .replace("<question_mark>", result.slice(0, -1))
        , ...values);
}

async function deleteOneById(tableName, id) {
    return runQuery(Queries.command_delete
        .replace("<table_name>", tableName), id);
}


async function updateOneById(tableName,id, options = {}) {

    const query = Queries.command_update
    .replace("<table_name>", tableName)
    .replace("<key_value>", Object.keys(options).map((key) =>
    `${key}= ?`));
    const valuesToUpDate = Object.values(options);
    valuesToUpDate.push(+id)
    try {
        const res = await runQuery(query, ...valuesToUpDate);
        return res;
    } catch (error) {
        throw error
    }
}

async function moveAllInactiveToHospital() {
    const query = "call move_inactive_hero_to_hospital";
    return runQuery(query);
}

module.exports = { findAll, createOne, deleteOneById, updateOneById, moveAllInactiveToHospital};