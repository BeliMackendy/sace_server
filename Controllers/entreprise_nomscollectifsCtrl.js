const entreprise_nomscollectifsDb = require("../Models/entreprise_nomscollectifsDb");

exports.Insert = async (req, res) => {
  const {
    id_institution,
    denomination,
    nature,
    acte_constitutif,
    reconnaissance,
    copie_p_identite,
  } = req.body;

  const newentreprise = {
    id_institution: id_institution,
    denomination: denomination,
    nature: nature,
    acte_constitutif: acte_constitutif,
    reconnaissance: reconnaissance,
    copie_p_identite: copie_p_identite,
  };

  await entreprise_nomscollectifsDb.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {
      const newentreprise_ = {
        id_institution: id_institution,
        denomination: denomination,
        nature: nature,
        acte_constitutif: acte_constitutif,
        reconnaissance: reconnaissance,
        copie_p_identite: copie_p_identite,
      };

      res.json(newentreprise_);
    }
  });
};
