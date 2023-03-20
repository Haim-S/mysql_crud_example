

const Weapons =  [
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'create_at', type: 'timestamp default current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'modify_at', type: 'timestamp on update current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'name', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'color', type: "ENUM('silver', 'black', 'red', 'green')", isPrimary: false, isAutoIncrement: false },
    { name: 'material', type: "ENUM('iron', 'metal', 'plastic', 'aluminom', 'dimoand', 'vibranuiom', 'tree', 'tungsten')", isPrimary: false, isAutoIncrement: false}
  ];



 module.exports = { Weapons};