const communeDb = require("../Models/communeDb");

exports.select_commune_arrondissement = async(req, res) => {
    const { Code_Arrondissement } = req.body;

    const arrondissement = {
        Code_Arrondissement: Code_Arrondissement,
    };
    await communeDb.select_commune_arrondissement(departement, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

