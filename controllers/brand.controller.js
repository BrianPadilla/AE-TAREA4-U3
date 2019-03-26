const status = require('http-status');

let _brands;

const getAll = (req, res) => {
    _brands.find({})
        .then(brands => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: brands
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
};

const create = (req, res) => {
    const brand = req.body;
    console.log(req);
    _brands.create(brand)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "Saved!!!",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar!!!",
                detail: error
            });
        });
};

const deleteBrand = (req, res) => {
    const { id } = req.params;
    _brands.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó!!!",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó!!!",
                detail: error
            });
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    _brands.findOne({ _id: id })
        .then(brand => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: brand
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}

const updateByName = (req,res) => {
    const name = req.params.name;
    const dato =  req.body.name;

    _brands.findOneAndUpdate({name:name},{$set:{name:dato}},{new:true})
    .then(brands=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Actualizado",
            detail:brands
        })
    })
    .catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error al actualizar",
            detail:error
        })
    })
}

module.exports = (Brand) => {
    _brands = Brand;
    return ({
        getAll, create, deleteBrand, getById, updateByName
    });
}