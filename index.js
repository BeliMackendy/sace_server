const express = require("express");
const app = express();
const cors = require("cors");
const ouverture = require("./Routes/ouvertureRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/app/sace", ouverture);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App Listen on port ${PORT}`));