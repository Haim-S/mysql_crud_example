


const Schema =  [ 
  
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'name', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'email', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'heroe_id', type: 'INT(11)', isPrimary: false, isAutoIncrement: false, foreignKey: { table: 'heroes', column: 'id' } }

  ];




 module.exports = { Schema};








