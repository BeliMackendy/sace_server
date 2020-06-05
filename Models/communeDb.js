const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From commune", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.select_commune_arrondissement = async(arrondissement,result) => {
    await connect.query(
        "SELECT * FROM commune where Code_Arrondissement = ?",
        arrondissement.Code_Arrondissement,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

