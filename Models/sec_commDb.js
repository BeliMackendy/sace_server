const connect = require("./db");

exports.select_sec_communale_commune = async(commune,result) => {
    await connect.query(
        "SELECT * FROM section_communale where CodeCom = ?",
        commune.Code_Com,
        (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        }
    );
};

