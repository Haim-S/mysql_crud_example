



const Heroes =  [ 
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'create_at', type: 'timestamp default current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'modify_at', type: 'timestamp on update current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'first_name', type: 'VARCHAR(55)',isPrimary: false, isAutoIncrement: false },
    { name: 'last_name', type: 'VARCHAR(55)', isPrimary: false, isAutoIncrement: false },
    { name: 'img_src', type: 'VARCHAR(255)',  isPrimary: false, isAutoIncrement: false },
    { name: 'type', type: "ENUM('infantry', 'sea', 'air','armor', 'ars')", isPrimary: false, isAutoIncrement: false },
    { name: 'weapon_id', type: 'INT(11)', isPrimary: false, isAutoIncrement: false, foreignKey: { table: 'weapons', column: 'id' } }
  ];

 module.exports = { Heroes};