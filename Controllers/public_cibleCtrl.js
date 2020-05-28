const public_cibleDb = require("../Models/public_cibleDb");

exports.all = async(req, res) => {
    await public_cibleDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectpublic_ciblebylibelle_cible = async(req, res) => {
    const { libelle_cible } = req.body;

    const public_cible = {
        libelle_cible: libelle_cible,
    };
    await public_cibleDb.selectpublic_ciblebylibelle_cible(
        public_cible,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result);
        }
    );
};

exports.selectpublic_ciblebyid_public_cible = async(req, res) => {
    const { id_public_cible } = req.body;

    const public_cible = {
        id_public_cible: id_public_cible,
    };
    await public_cibleDb.selectpublic_ciblebyid_public_cible(
        public_cible,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result);
        }
    );
};