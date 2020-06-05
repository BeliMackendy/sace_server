const connect = require("./db");

exports.all = async(result) => {
    await connect.query("Select * From departement", (err, res) => {
        if (err) result(null, err);
        else result(null, res);
    });
};

