const PointRelais = require('../model/pointRelais');

module.exports.getPointsRelais = async (req, res) => {
    try {
        const pointRelais = await PointRelais.find();
        res.json(pointRelais);
    } catch (err) {
        console.log(err);
        res.status(400).send("error listing point Relais");
    }
};

module.exports.addPointRelais = async (req, res) => {
    const {id,name,adresse,latitude,longitude} = req.body;
    try {
        const pointRelais = await PointRelais.create({id,name,adresse,latitude,longitude});
        res.status(201).json(pointRelais);
    } catch (err) {
        console.log('error addPointRelais : ', err);
        res.status(400).send('error point Relais cannot be inserted');
    }
}