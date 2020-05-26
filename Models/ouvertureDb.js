const connect = require("./db");

exports.Insert = async(newdemande, result) => {
    await connect.query(
        "INSERT INTO institution set ?",
        newdemande,
        (err, res) => {
            if (err) result(err, null);
            else result(null, res);
        }
    );
};