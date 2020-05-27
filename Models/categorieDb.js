const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From categorie", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectcategoriebyLibelle = async(categorie, result) => {
    await connect.query(
        "SELECT * FROM categorie where Libelle_Categorie = ?",
        categorie.Libelle_Categorie,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectcategoriebyIdCategorie = async(categorie, result) => {
    await connect.query(
        "SELECT * FROM categorie where IdCategorie = ?",
        categorie.IdCategorie,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};