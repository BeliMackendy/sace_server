const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
const cors = require("cors");
const ouverture = require("./Routes/ouvertureRoutes");
const souscategorie = require("./Routes/souscategorieRoutes");
const categorie = require("./Routes/categorieRoutes");
const niveau = require("./Routes/niveauRoutes");
const programme = require("./Routes/programmeRoutes");
const public_cible = require("./Routes/public_cibleRoutes");
const vacation = require("./Routes/vacationRoutes");
const entreprise_individuelle = require("./Routes/entreprise_individuelleRoutes");
const entreprise_nomscollectifs = require("./Routes/entreprise_nomscollectifsRoutes");
const personne_moraleRoutes = require("./Routes/personne_moraleRoutes");

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/app/sace", ouverture);
app.use("/app/sace", categorie);
app.use("/app/sace", souscategorie);
app.use("/app/sace", niveau);
app.use("/app/sace", programme);
app.use("/app/sace", public_cible);
app.use("/app/sace", vacation);
app.use("/app/sace", entreprise_individuelle);
app.use("/app/sace", entreprise_nomscollectifs);
app.use("/app/sace", personne_moraleRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App Listen on port ${PORT}`));
