const connect = require("./db");

exports.Insert = async (newentreprise, result) => {
  console.log(newentreprise);
  await connect.query(
    "INSERT INTO personne_morale set ?",
    newentreprise,
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};
