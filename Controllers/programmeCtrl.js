const programmeDb = require("../Models/programmeDb");

exports.all = async(req, res) => {
    await programmeDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectprogrammebylibelle_programme = async(req, res) => {
    const { libelle_programme } = req.body;

    const programme = {
        libelle_programme: libelle_programme,
    };
    await programmeDb.selectprogrammebylibelle_programme(
        programme,
        (err, result) => {
            if (err) {
                console.log(`Error: ${err}`);
            }
            res.json(result[0]);
        }
    );
};

exports.selectprogrammebyId_programme = async(req, res) => {
    const { Id_programme } = req.body;

    const programme = {
        Id_programme: Id_programme,
    };
    await programmeDb.selectprogrammebyId_programme(programme, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result[0]);
    });
};