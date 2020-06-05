const arrondissementDb = require("../Models/arrondissementDb");

exports.select_arrondissement_departement = async(req, res) => {
    const { Code_Direction } = req.body;

    const departement = {
        Code_Direction: Code_Direction,
    };
    await arrondissementDb.select_arrondissement_departement(departement, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

