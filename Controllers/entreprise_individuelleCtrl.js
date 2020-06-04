const entreprise_individuelleDb = require("../Models/entreprise_individuelleDb");

exports.Insert = async (req, res) => {
  console.log(req.files);
  // console.log(req.files);
  //  if (!req.files) {
  //    res.send("File was not found");
  //    return;
  //  }

  //  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // let sampleFile = req.files.sampleFile;

  // // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  //   if (err)
  //     return res.status(500).send(err);

  //   res.send('File uploaded!');
  // });


  // const {
  //   id_institution,
  //   nom,
  //   prenom,
  //   nif,
  //   cin_nin,
  //   email,
  //   tel,
  //   niveau_acad,
  //   identite,
  //   certificat_sante,
  //   certificat_vie_moeurs,
  //   dd_impots,
  // } = req.body;

  // const newentreprise = {
  //   id_institution: id_institution,
  //   nom: nom,
  //   prenom: prenom,
  //   nif: nif,
  //   cin_nin: cin_nin,
  //   email: email,
  //   tel: tel,
  //   niveau_acad: niveau_acad,
  //   identite: identite,
  //   certificat_sante: certificat_sante,
  //   certificat_vie_moeurs: certificat_vie_moeurs,
  //   dd_impots: dd_impots,
  // };

  // await entreprise_individuelleDb.Insert(newentreprise, (err, result) => {
  //   if (err) console.log(err);
  //   else {
  //     const newentreprise_ = {
  //       Id_institution: result.insertId,
  //       nom,
  //       prenom,
  //       nif,
  //       cin_nin,
  //       email,
  //       tel,
  //       niveau_acad,
  //       identite,
  //       certificat_sante,
  //       certificat_vie_moeurs,
  //       dd_impots,
  //     };

  // res.json(newentreprise_);
  // }
  // });
};
