const categorieDb = require("../Models/categorieDb");

exports.all = async(req, res) => {
    await categorieDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectcategoriebyLibelle = async(req, res) => {
    const { Libelle_Categorie } = req.body;

    const categorie = {
        Libelle_Categorie: Libelle_Categorie,
    };
    await categorieDb.selectcategoriebyLibelle(categorie, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectcategoriebyIdCategorie = async(req, res) => {
    const { IdCategorie } = req.body;

    const categorie = {
        IdCategorie: IdCategorie,
    };
    await categorieDb.selectcategoriebyLibelle(categorie, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};