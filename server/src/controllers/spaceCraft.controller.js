const { SpaceCraft } = require("../db.js");

const getSpaceCrafts = async (req, res, next)=>{
    try {
        let cons = await SpaceCraft.findAll();
        res.status(200).json(cons);
    } catch (error) {
        res.status(400).json({error});
    }
}

const setSpaceCraft = async (req, res, next)=>{
    try {
        console.log(req.body);
        let sc = await SpaceCraft.create(req.body);
        res.status(200).json(sc);
    } catch (error) {
        res.status(400).json({error});
    }
}

module.exports = {
    getSpaceCrafts, setSpaceCraft
}