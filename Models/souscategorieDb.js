const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From sous_categorie", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

exports.selectsouscategoriebyLibelle = async(souscategorie, result) => {
    // console.log(souscategorie);
    await connect.query(
        "Select * From sous_categorie where Libelle_souscategorie = ?",
        souscategorie.Libelle_souscategorie,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectsouscategoriebyId_souscategorie = async(souscategorie, result) => {
    // console.log(souscategorie);
    await connect.query(
        "Select * From sous_categorie where Id_souscategorie = ?",
        souscategorie.Id_souscategorie,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

exports.selectsouscategoriebyId_categorie = async(souscategorie, result) => {
    console.log(souscategorie);
    await connect.query(
        "Select * From sous_categorie where Id_categorie = ?",
        souscategorie.Id_categorie,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};