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

module.exports.getPointRelais = async(req, res) => {
    const id = req.params.id;
    try {
        const pointRelais = await PointRelais.findOne({id});
        res.status(200).send(pointRelais);
    } catch (err) {
        console.log(err);
        res.status(400).send("error finding point Relais");
    }
}

module.exports.addPointRelais = async (req, res) => {
    const {id,name,adresse,latitude,longitude,horaires} = req.body;
    try {
        const pointRelais = await PointRelais.create({id,name,adresse,latitude,longitude,horaires});
        res.status(201).json(pointRelais);
    } catch (err) {
        console.log('error addPointRelais : ', err);
        res.status(400).send('error point Relais cannot be inserted');
    }
}

module.exports.deletePointRelais = async (req, res) => {
    const _id= req.params.id;
    try{
       await PointRelais.deleteOne({_id});
        res.status(200).send("Pr deleted");
    } catch (err){
        console.log('error deletePointRelais : ', err);
        res.status(400).send('error deleting pointRelais id=', id);
    }
}

module.exports.produit_delete = async (req, res) => {
    const _id = req.params.id;
    try {
        //equivalent getParameter de java (id de routes)
        await Product.deleteOne({ _id });
        res.status(204).send("produit supprimé");
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: "produit pas suppr" });
    }
};