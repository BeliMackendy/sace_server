const niveauDb = require("../Models/niveauDb");

exports.all = async(req, res) => {
    await niveauDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectniveaubylibelle_niveau = async(req, res) => {
    const { libelle_niveau } = req.body;

    const niveau = {
        libelle_niveau: libelle_niveau,
    };
    await niveauDb.selectniveaubylibelle_niveau(niveau, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result[0]);
    });
};

exports.selectniveaubyId_niveau = async(req, res) => {
    const { Id_niveau } = req.body;

    const niveau = {
        Id_niveau: Id_niveau,
    };
    await categorieDb.selectcategoriebyLibelle(niveau, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result[0]);
    });
};