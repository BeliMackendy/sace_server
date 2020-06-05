const connect = require("./db");

exports.all = async (result) => {
  await connect.query("Select * From district", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

exports.select_district_departement = async (departement, result) => { 
  await connect.query(
    "SELECT * FROM district where CodeDir = ?",
    departement.Code_Direction,
    (err, res) => {
      if (err) result(null, err);
      else result(null, res);
    }
  );
};
