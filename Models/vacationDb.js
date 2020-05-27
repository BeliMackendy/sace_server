const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From vacation", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectvacationbylibelle_vacation = async(vacation, result) => {
    await connect.query(
        "SELECT * FROM categorie where libelle_vacation = ?",
        vacation.libelle_vacation,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectvacationbyId_vacation = async(vacation, result) => {
    await connect.query(
        "SELECT * FROM categorie where Id_vacation = ?",
        vacation.Id_vacation,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};