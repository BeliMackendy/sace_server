const entreprise_nomscollectifsDb = require("../Models/entreprise_nomscollectifsDb");
var fs =require('fs')

exports.Insert = async (req, res) => {
  const { id, denomination, nature } = req.body;
  console.log(req.body)

  const { acte_constitutif, reconnaissance, copie_p_identite } = req.files;
  fs.mkdirSync(`./uploads/${id}`)

  acte_constitutif.mv(`./uploads/${id}/${acte_constitutif.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      filename: `${acte_constitutif.name}`,
      filePath: `/uploads/${id}/${acte_constitutif.name}`,
    });
  });

  reconnaissance.mv(`./uploads/${id}/${reconnaissance.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      filename: `${reconnaissance.name}`,
      filePath: `/uploads/${id}/${reconnaissance.name}`,
    });
  });
  
  copie_p_identite.mv(`./uploads/${id}/${copie_p_identite.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      filename: `${copie_p_identite.name}`,
      filePath: `/uploads/${id}/${copie_p_identite.name}`,
    });
  });

  // const newentreprise = {
  //   id_institution: id_institution,
  //   denomination: denomination,
  //   nature: nature,
  //   acte_constitutif: acte_constitutif,
  //   reconnaissance: reconnaissance,
  //   copie_p_identite: copie_p_identite,
  // };

  // await entreprise_nomscollectifsDb.Insert(newentreprise, (err, result) => {
  //   if (err) console.log(err);
  //   else {
  //     const newentreprise_ = {
  //       id_institution: id_institution,
  //       denomination: denomination,
  //       nature: nature,
  //       acte_constitutif: acte_constitutif,
  //       reconnaissance: reconnaissance,
  //       copie_p_identite: copie_p_identite,
  //     };

  //     res.json(newentreprise_);
  //   }
  // });
};
