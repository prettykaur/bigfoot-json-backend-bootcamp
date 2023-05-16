const { getSightings } = require("../utils");

class SightingsController {
  constructor() {
    this.sightings = getSightings();
  }

  listSightings = async (req, res) => {
    const sightings = await this.sightings;
    // Retrieve query parameters
    const { year, season, month } = req.query;
    // Filter sightings based on query parameters
    const filteredSightings = sightings.filter((sighting) => {
      return (
        (!year || sighting.YEAR === year) &&
        (!season || sighting.SEASON === season) &&
        (!month || sighting.MONTH === month)
      );
    });
    res.json(filteredSightings);
  };

  showSighting = async (req, res) => {
    const sightings = await this.sightings;
    res.json(sightings[req.params.sightingIndex]);
  };
}

module.exports = SightingsController;
