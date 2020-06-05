const entreprise_individuelleDb = require("../Models/entreprise_individuelleDb");

const save_image = (id, image) => {
  fs.mkdirSync(`./uploads/${id}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  image.mv(`./uploads/${id}/${image.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  });
};

exports.Insert = async (req, res) => {
  const { id, nom, prenom, nif, cin_nin, email, tel, niveau_acad } = req.body;
  // console.log(req.body);
  const {
    indentite,
    certificat_sante,
    certificat_vie_moeurs,
    dd_impots,
  } = req.files;
  // console.log(req.files);

  const indentite_path = `/uploads/${id}/${indentite.name}`;
  const certificat_sante_path = `/uploads/${id}/${certificat_sante.name}`;
  const certificat_vie_moeurs_path = `/uploads/${id}/${certificat_vie_moeurs.name}`;
  const dd_impots_path = `/uploads/${id}/${dd_impots.name}`;

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

  const newentreprise = {
    id_institution: id,
    nom: nom,
    prenom: prenom,
    nif: nif,
    cin_nin: cin_nin,
    email: email,
    tel: tel,
    niveau_acad: niveau_acad,
    identite: indentite_path,
    certificat_sante: certificat_sante_path,
    certificat_vie_moeurs: certificat_vie_moeurs_path,
    dd_impots: dd_impots_path,
  };

  await entreprise_individuelleDb.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {
      save_image(id, identite_path);
      save_image(id, certificat_sante_path);
      save_image(id, certificat_vie_moeurs_path);
      save_image(id, dd_impots_path);
      
      const newentreprise_ = {
        Id_institution: id,
        nom: nom,
        prenom: prenom,
        nif: nif,
        cin_nin: cin_nin,
        email: email,
        tel: tel,
        niveau_acad: niveau_acad,
        identite: identite_path,
        certificat_sante: certificat_sante_path,
        certificat_vie_moeurs: certificat_vie_moeurs_path,
        dd_impots: dd_impots,
      };

      res.json(newentreprise_);
    }
  });
};
