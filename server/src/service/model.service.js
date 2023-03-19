const {runQuery} = require("../database/runQuery");
const {QueriesDB, QueriesStoreProcedure} = require("../database/Queries")



async function createTable(getDB, tableName, Schema) {
   
const placeholders = Schema.map(column => {
  let placeholder = `${column.name} ${column.type}`;
  if (column.isPrimary) {
    placeholder += ' NOT NULL PRIMARY KEY';
  }
  if (column.isAutoIncrement) {
    placeholder += ' AUTO_INCREMENT';
  }
  if (column.foreignKey) {
      const { table, column: foreignColumn } = column.foreignKey;
      placeholder += `, FOREIGN KEY (${column.name}) REFERENCES ${table} (${foreignColumn})`;
    }
  return placeholder;
});


    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${placeholders.join(', ')})`;
    return new Promise((resolve, reject) => {
        getDB().query(createTableQuery, (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        });
      });
}



async function dropTableByName(tableName) {
    const dropTableQuery = `drop table ${tableName}`
    return runQuery(dropTableQuery);
}

async function createProcedure(connection) {
  
  const pp = QueriesStoreProcedure.create_procedure
  .replace("<procedureName>", "move_inactive_hero_to_hospital")
  .replace("<command>", QueriesDB.command_create);

  
  connection.query(pp, (error, results, fields) => {
    if (error) throw error.sqlMessage;
    console.log('Stored procedure created successfully');
  });
 
}



module.exports = { createTable, dropTableByName, createProcedure};