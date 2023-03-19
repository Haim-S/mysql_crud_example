



const Hospital =  [ 

    { name: 'injured_id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'injured_time', type: 'timestamp NULL DEFAULT CURRENT_TIMESTAMP', isPrimary: false, isAutoIncrement: false },
    { name: 'last_name', type: 'VARCHAR(55)', isPrimary: false, isAutoIncrement: false },
    { name: 'img_src', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'type', type: "ENUM('infantry', 'sea', 'air','armor', 'ars')", isPrimary: false, isAutoIncrement: false },
    { name: 'hero_id', type: 'INT(11)', isPrimary: false, isAutoIncrement: false, foreignKey: { table: 'weapons', column: 'id' }}
  ];

 module.exports = { Hospital};