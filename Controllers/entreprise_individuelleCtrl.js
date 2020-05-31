const entreprise_individuelleDb = require("../Models/entreprise_individuelleDb");

exports.Insert = async (req, res) => {
  const {
    id_institution,
    nom,
    prenom,
    nif,
    cin_nin,
    email,
    tel,
    niveau_acad,
    identite,
    certificat_sante,
    certificat_vie_moeurs,
    dd_impots,
  } = req.body;

  const newentreprise = {
    id_institution: id_institution,
    nom:nom,
    prenom: prenom,
    nif: nif,
    cin_nin:cin_nin,
    email: email,
    tel:tel,
    niveau_acad: niveau_acad,
    identite:identite,
    certificat_sante: certificat_sante,
    certificat_vie_moeurs:certificat_vie_moeurs,
    dd_impots: dd_impots,
  };

  await entreprise_individuelleDb.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {
      const newentreprise_ = {
        Id_institution: result.insertId,
        nom,
        prenom,
        nif,
        cin_nin,
        email,
        tel,
        niveau_acad,
        identite,
        certificat_sante,
        certificat_vie_moeurs,
        dd_impots,
      };

      res.json(newentreprise_);
    }
  });
};
