
const CRUD = require("../service/crud.service");


exports.getAll = async(req, res)=>{
    const options = {
        tableName: "heroes",
        ReftableName: "weapons",
        SELECT: `
        heroes.id as heroe_id,
        heroes.create_at as heroe_create_at,
        first_name,
        last_name,
        heroes.type as heroe_type,
        active,
        weapons.id as weapon_id,
        weapons.name as weapon_name,
        weapons.color as weapon_color,
        weapons.material as weapon_matireial,
        weapons.img_src as weapon_src
            `,
        myTableKey: "heroes.weapon_id",
        refTableKey: "weapons.id"
    }

//     const tableName = "heroes";
//     const ReftableName = "weapons";
//     const SELECT = `
// heroes.id as heroe_id,
// heroes.create_at as heroe_create_at,
// first_name,
// last_name,
// heroes.type as heroe_type,
// active,
// weapons.id as weapon_id,
// weapons.name as weapon_name,
// weapons.color as weapon_color,
// weapons.material as weapon_matireial,
// weapons.img_src as weapon_src
//     `;
//     const tableKey = {myTableKey: "heroes.weapon_id", refTableKey: "weapons.id"};
try {
    const data = await CRUD.findAll(options);
    res.status(200).send(data);
} catch (error) {
    console.log(error);
  res.status(500).send(error);  
}
};

exports.createHero = async(req, res)=>{
    try {
        const tableName = "heroes";
        const new_data = await CRUD.createOne(tableName,Object.keys(req.body),Object.values(req.body));
        res.status(201).send(new_data); 
    } catch (error) {
        res.status(500).send(error);
        
    }
}

exports.deleteHero = async(req, res)=>{
    try {
        const tableName = "heroes";
        const deleteOne = await CRUD.deleteOneById(tableName, ...req.params.id);
        if(!deleteOne.affectedRows) return res.status(400).json({error: "No item deleted"})
        res.status(201).send(deleteOne);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateOneHero = async (req, res) => {
    try {
        const tableName = "heroes";
      const result =  await CRUD.updateOneById(tableName, req.params.id, req.body);
      res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.moveToHospital = async (req, res) => {
    try {
        const result = await CRUD.moveAllInactiveToHospital();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}