const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

const SightingsController = require("./controllers/sightingsController.js");
const sightingsController = new SightingsController();

const SightingsRouter = require("./routers/sightingsRouter.js");
const sightingsRouter = new SightingsRouter(sightingsController);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/sightings", sightingsRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
