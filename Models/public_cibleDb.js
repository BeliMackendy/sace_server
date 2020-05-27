const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From public_cible", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectpublic_ciblebylibelle_cible = async(public_cible, result) => {
    await connect.query(
        "SELECT * FROM public_cible where libelle_cible = ?",
        public_cible.libelle_cible,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectpublic_ciblebyid_public_cible = async(public_cible, result) => {
    await connect.query(
        "SELECT * FROM public_cible where id_public_cible = ?",
        public_cible.id_public_cible,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};