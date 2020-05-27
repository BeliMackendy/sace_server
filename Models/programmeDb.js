const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From programme", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectprogrammebylibelle_programme = async(programme, result) => {
    await connect.query(
        "SELECT * FROM proramme where libelle_programme = ?",
        programme.libelle_programme,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectprogrammebyId_programme = async(programme, result) => {
    await connect.query(
        "SELECT * FROM programme where Id_programme = ?",
        programme.Id_programme,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};