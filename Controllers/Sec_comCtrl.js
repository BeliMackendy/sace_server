const sec_commDb = require("../Models/sec_commDb");

exports.select_sec_communale_commune = async (req, res) => {
  const { Code_Com } = req.body;

  const commune = {
    Code_Com: Code_Com,
  };
  
  await sec_commDb.select_sec_communale_commune(commune, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

