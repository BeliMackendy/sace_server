const communeDb = require("../Models/communeDb");

exports.select_commune_arrondissement = async (req, res) => {
  const { Code_Arrondissement } = req.body;

  const arrondissement = {
    Code_Arrondissement: Code_Arrondissement,
  };
  console.log(arrondissement);
  await communeDb.select_commune_arrondissement(arrondissement, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

exports.select_commune_departement = async (req, res) => {
    const { Code_Direction } = req.body;
  
    const departement = {
        Code_Direction: Code_Direction,
    };
    await communeDb.select_commune_departement(departement, (err, result) => {
      if (err) {
        console.log(`Error: ${err}`);
      }
      res.json(result);
    });
  };