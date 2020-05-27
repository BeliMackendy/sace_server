const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From niveau", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectniveaubylibelle_niveau = async(niveau, result) => {
    await connect.query(
        "SELECT * FROM niveau where libelle_niveau = ?",
        niveau.libelle_niveau,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectniveaubyId_niveau = async(niveau, result) => {
    await connect.query(
        "SELECT * FROM niveau where Id_niveau = ?",
        niveau.Id_niveau,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};