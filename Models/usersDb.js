const connect = require("./db");

exports.addUser = async (newUser, result) => {
  await connect.query("Insert Into Users set ?", newUser, (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

