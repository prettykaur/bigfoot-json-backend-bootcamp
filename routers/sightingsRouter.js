const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(sightingsController) {
    this.controller = sightingsController;
  }

  routes = () => {
    router.get("/", this.controller.listSightings);
    router.get("/:sightingIndex", this.controller.showSighting);

    return router;
  };
}

module.exports = SightingsRouter;
