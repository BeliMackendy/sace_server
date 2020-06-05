const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From arrondissement", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.select_arrondissement_departement = async(departement,result) => {
    await connect.query(
        "SELECT * FROM arrondissement where Code_Direction = ?",
        departement.Code_Direction,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

