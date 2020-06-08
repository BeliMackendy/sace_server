const usersDb = require("../Models/usersDb");

exports.addUser = async (req, res) => {
  const { nom, prenom, email, tel, password, role } = req.body;

  const user = {
    nom: nom,
    prenom: prenom,
    email: email,
    tel:tel,    
    password: password,
    role: role,
  };

  await usersDb.addUser(user, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    // res.send(result);
    const newUser = {      
      nom: nom,
      prenom: prenom,
      email: email,
      tel: tel,
      password: password,
      role: role,
    };

    res.json(newUser);
  });
};
