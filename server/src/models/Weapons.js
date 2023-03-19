

const Weapons =  [
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'name', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'color', type: "ENUM('silver', 'black', 'red', 'green')", isPrimary: false, isAutoIncrement: false },
    { name: 'material', type: "ENUM('iron', 'metal', 'plastic', 'aluminom', 'dimoand', 'vibranuiom', 'tree', 'tungsten')", isPrimary: false, isAutoIncrement: false}
  ];



 module.exports = { Weapons};