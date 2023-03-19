
const CRUD = require("../service/crud.service");


exports.getAll = async(req, res)=>{
try {
    const tableName = "weapons";
    const weapons = await CRUD.findAll(tableName);
    res.status(200).send(weapons);
} catch (error) {
  res.status(500).send(error);  
}
};

exports.createWeapon = async(req, res)=>{
    try {
        const tableName = "weapons";
        const new_weapon = await CRUD.createOne(tableName,Object.keys(req.body),Object.values(req.body));
        res.status(201).send(new_weapon); 
    } catch (error) {
        res.status(500).send(error);
        
    }
}

exports.deleteWeapon = async(req, res)=>{
    try {
        const tableName = "weapons";
        const deleteOne = await CRUD.deleteOneById(tableName, ...req.params.id);
        if(!deleteOne.affectedRows) return res.status(400).json({error: "No item deleted"})
        res.status(201).send(deleteOne);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateOneWeapon = async (req, res) => {
    try {
        const tableName = "weapons";
      const result =  await CRUD.updateOneById(tableName, req.params.id, req.body);
      res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}