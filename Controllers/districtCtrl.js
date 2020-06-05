const districtDb = require("../Models/districtDb");

exports.select_district_departement = async(req, res) => {
    const { Code_Direction } = req.body;

    const departement = {
        Code_Direction: Code_Direction,
    };
    // console.log(departement)
    await districtDb.select_district_departement(departement, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

