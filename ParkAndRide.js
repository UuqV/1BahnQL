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

  parkingSpaces(args) {
    return this.parkingspaceService.nearbyParkingspaces(
      this.start_latitude,
      this.start_longitude,
      this.radius,
      args.count,
      args.offset
    );
  }

  travelCenters(args) {
    return this.travelCenterService.travelCentersAtLocation(
      this.start_latitude,
      this.start_longitude,
      this.radius,
      args.count,
      args.offset
    );
  }

  flinksterCars(args) {
    return this.flinksterService.nearbyFlinksterCars(
      this.start_latitude,
      this.start_longitude,
      this.radius,
      args.count,
      args.offset
    );
  }

  stations(args) {
    //{
    // "data": {
    // "parkandride": {
    //   "stations": [
    //     {
    //       "name": "Berlin Anhalter Bahnhof",
    //       "location": {
    //         "latitude": 52.503486,
    //         "longitude": 13.381362
    //       }
    //     }
    //   ]
    // }
    // }
    // }

    // [[Promise] , [Promise]]

    const station1 = this.nearbyStationService
      .stationNearby(
        this.start_latitude,
        this.start_longitude,
        this.radius,
        1,
        args.offset
      )
      .then(res => res[0]);

    // Promise
    const station2 = this.nearbyStationService
      .stationNearby(
        this.end_latitude,
        this.end_longitude,
        this.radius,
        1,
        args.offset
      )
      .then(res => res[0]);
    //console.log(Promise.all([station1, station2]).then(console.log));
    station2.then(console.log);
    return Promise.all([station1, station2]);
  }

  bikes(args) {
    return this.flinksterService.nearbyFlinksterBikes(
      this.start_latitude,
      this.start_longitude,
      this.radius,
      args.count,
      args.offset
    );
  }
}

module.exports = ParkAndRide;
