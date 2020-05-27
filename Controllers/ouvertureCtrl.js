const ouvertureDb = require("../Models/ouvertureDb");

exports.Insert = async (req, res) => {
  const {
    denomination,
    adresse,
    tel,
    email,
    dde,
    commune,
    section_communale,
    bds,
    biz,
    categorie,
    typecategorie,
    niveau,
    vacation,
    programme,
    cible,
    date_demande,
  } = req.body;

  const demande = {
    denomination: denomination,
    adresse: adresse,
    tel: tel,
    email: email,
    dde: dde,
    commune: commune,
    section_communale: section_communale,
    bds: bds,
    biz: biz,
    id_souscategorie: "6",
    type_categorie: typecategorie,
    id_niveau: niveau,
    id_vacation: vacation,
    id_programme: programme,
    id_cible: cible,
    date_demande: date_demande,
  };

  await ouvertureDb.Insert(demande, (err, result) => {
    if (err) console.log(err);
    else {
      const newdemande = {
        Id_institution: result.insertId,
        denomination: denomination,
        adresse: adresse,
        tel: tel,
        email: email,
        dde: dde,
        commune: commune,
        section_communale: section_communale,
        bds: bds,
        biz: biz,
        categorie: categorie,
        typecategorie: typecategorie,
        niveau: niveau,
        vacation: vacation,
        programme: programme,
        cible: cible,
        date_demande: date_demande,
      };

      res.json(newdemande);
    }
  });
};
