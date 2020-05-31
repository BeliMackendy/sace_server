const connect = require("./db");

exports.Insert = async (newentreprise, result) => {
  console.log(newentreprise);
  await connect.query(
    "INSERT INTO entreprise_noms_collectifs set ?",
    newentreprise,
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};
