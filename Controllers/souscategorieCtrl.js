const souscategorieDb = require("../Models/souscategorieDb");

exports.all = async(req, res) => {
    await souscategorieDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectsouscategoriebyLibelle = async(req, res) => {
    const { Libelle_souscategorie } = req.body;

    const souscategorie = {
        Libelle_souscategorie: Libelle_souscategorie,
    };
    await souscategorieDb.selectsouscategoriebyLibelle(
        souscategorie,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result[0]);
        }
    );
};

exports.selectsouscategoriebyId_souscategorie = async(req, res) => {
    const { Id_souscategorie } = req.body;

    const souscategorie = {
        Id_souscategorie: Id_souscategorie,
    };
    await souscategorieDb.selectsouscategoriebyLibelle(
        souscategorie,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result[0]);
        }
    );
};

exports.selectsouscategoriebyId_categorie = async(req, res) => {
    const { Id_categorie } = req.body;

    const souscategorie = {
        Id_categorie: Id_categorie,
    };
    await souscategorieDb.selectsouscategoriebyLibelle(
        souscategorie,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result[0]);
        }
    );
};