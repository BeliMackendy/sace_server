const vacationDb = require("../Models/vacationDb");

exports.all = async(req, res) => {
    await vacationDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectvacationbylibelle_vacation = async(req, res) => {
    const { libelle_vacation } = req.body;

    const vacation = {
        libelle_vacation: libelle_vacation,
    };
    await vacationDb.selectvacationbylibelle_vacation(vacation, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.selectvacationbyId_vacation = async(req, res) => {
    const { Id_vacation } = req.body;

    const vacation = {
        Id_vacation: Id_vacation,
    };
    await vacationDb.selectvacationbyId_vacation(vacation, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};