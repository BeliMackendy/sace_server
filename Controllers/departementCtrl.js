const departementDb = require("../Models/departementDb");

exports.all = async(req, res) => {
    await departementDb.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

