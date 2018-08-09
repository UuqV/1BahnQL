class ParkAndRide {
  constructor(
    start_latitude,
    start_longitude,
    end_latitude,
    end_longitude,
    radius,
    nearbyStationService,
    parkingspaceService,
    flinksterService,
    travelCenterService,
    routingService
  ) {
    this.start_latitude = start_latitude;
    this.start_longitude = start_longitude;
    this.end_latitude = end_latitude;
    this.end_longitude = end_longitude;
    this.radius = radius;
    //Service Dependencies
    this.nearbyStationService = nearbyStationService;
    this.parkingspaceService = parkingspaceService;
    this.flinksterService = flinksterService;
    this.travelCenterService = travelCenterService;
    this.routingSerivce = routingService;
  }

  routing(args) {
    return Promise.all([
      this.nearbyStationService
        .startstation(this.start_latitude, this.start_longitude, this.radius)
        .then(res => Promise.all(res)),
      this.nearbyStationService
        .endstation(this.end_latitude, this.end_longitude, this.radius)
        .then(res => Promise.all(res))
    ])
      .then(stationlists => {
        const startstations = stationlists[0];
        const endstations = stationlists[1];
        const tester = startstations[0].primaryEvaId;
        return Promise.all(
          startstations
            .slice(0, 5)
            .map((_, i) =>
              this.routingSerivce.routes(
                startstations[i].primaryEvaId,
                endstations[i].primaryEvaId
              )
            )
        );
      })
      .then(res => res.map(routes => routes[0]));
  }
}

module.exports = ParkAndRide;
