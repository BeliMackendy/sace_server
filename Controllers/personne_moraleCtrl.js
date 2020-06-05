const personne_moraleDb = require("../Models/personne_moraleDb");
var fs = require("fs");
const path = require("path");


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
  const { id, denomination, nature } = req.body;
  // console.log(req.body);
  const { reconnaissance, quitus_patente } = req.files;
  // console.log(req.files); 

  
  const reconnaissance_path = `/uploads/${id}/${reconnaissance.name}`;
  const quitus_patente_path = `/uploads/${id}/${quitus_patente.name}`;
  // const {
  //   id_institution,
  //   denomination,
  //   nature,
  //   reconnaissance,
  //   quitus_patente,
  // } = req.body;

  const newentreprise = {
    id_institution: id,
    denomination: denomination,
    nature: nature,
    reconnaissance: reconnaissance_path,
    quitus_patente: quitus_patente_path,
  };

  await personne_moraleDb.Insert(newentreprise, (err, result) => {
    if (err) console.log(err);
    else {      
      save_image(id, reconnaissance);
      save_image(id, quitus_patente);
      const newentreprise_ = {
        id_institution: id,
        denomination: denomination,
        nature: nature,        
        reconnaissance: reconnaissance_path,
        copie_p_identite: quitus_patente,
      };

      res.json(newentreprise_);
    }
  });
};
