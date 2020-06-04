const personne_moraleDb = require("../Models/personne_moraleDb");

exports.Insert = async (req, res) => {
  console.log(req);
  // const {
  //   id_institution,
  //   denomination,
  //   nature,
  //   reconnaissance,
  //   quitus_patente,
  // } = req.body;

  // const newentreprise = {
  //   id_institution: id_institution,
  //   denomination: denomination,
  //   nature: nature,
  //   reconnaissance: reconnaissance,
  //   quitus_patente: quitus_patente,
  // };

  // await personne_moraleDb.Insert(newentreprise, (err, result) => {
  //   if (err) console.log(err);
  //   else {
  //     const newentreprise_ = {
  //       id_institution: id_institution,
  //       denomination,
  //       nature,
  //       reconnaissance,
  //       quitus_patente,
  //     };

  //     res.json(newentreprise_);
  //   }
  // });
};
