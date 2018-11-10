const Model = require('./models');

module.exports.postModel = (req, res) => {
    const model = new Model({
        field : req.body.field
    });

    model.save((err, doc) => {
        if (err)
            res.send(err);
        res.json({message : 'added a model'});
    });
};

module.exports.getModel = (req, res) => {
    Model.findById(req.params.id, (err, doc) => {
        if (err)
            res.send(err);
        res.json(doc);
    });
};

module.exports.getModels = (req, res) => {
    Model.find((err, docs) => {
        if (err)
            res.send(err);
        res.json(docs);
    });
};

module.exports.putModel = (req, res) => {
    Model.updateOne({_id : req.params.id}, {field : req.body.field}, (err, doc) => {
        if (err)
            res.send(err);
        res.json({message : 'updated a model'});            
    });
};

module.exports.deleteModel = (req, res) => {
    Model.deleteOne({_id : req.params.id}, (err, doc) => {
        if (err)
            res.send(err);
        res.json({message : 'removed a model'});                    
    });
};
