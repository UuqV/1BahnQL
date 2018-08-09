# 1BahnQL
<p align="center">
  <img src="logo.svg" margin="auto" height="200" width="200">
</p>

Single unified API for all DBOpenData APIs implemented with GraphQL. We implemented the following APIs: StaDa, FaSta, TimeTables, Flinkster, CallABike, ParkplätzeAPI, ReiseCenter



## GraphiQL Playground
[1BahnQL GraphiQL](https://bahnql.herokuapp.com/graphql)

## Usage
### Install
The installation requires node.js as the execution environment as well as npm as the package manager. Then run `npm install` as a command on your commandline interface.

### Run
You need an active authentication token to run your personal installation. You can get one on [developer.deutschebahn.com](https://developer.deutschebahn.com). After creating you account you also have to subscribe to desired services by your own.

Use your "Zugangstoken" as the DBDeveloperAuthorization Token and run the server:

`DBDeveloperAuthorization=<Your DBOpenData Authentication Token> node index.js`

Optional parameters:
- DBBaseURL

### ParkAndRide

{
  parkandride(start_latitude: 53.55, start_longitude: 9.99, end_latitude: 52.5, end_longitude: 13.4) {
    routing {
      parts {
        delay
      }
      from {
        name
        location {
          latitude
          longitude
        }
        hasLocalPublicTransport
        hasParking
      }
      to {
        name
        location {
          latitude
          longitude
        }
        hasLocalPublicTransport
        hasParking
      }
    }
  }
}

Returns data like:

{
  "data": {
    "parkandride": {
      "routing": [
        {
          "parts": [
            {
              "delay": 120
            },
            {
              "delay": 0
            },
            {
              "delay": 0
            }
          ],
          "from": {
            "name": "Hamburg Dammtor",
            "location": {
              "latitude": 53.560751,
              "longitude": 9.989566
            },
            "hasLocalPublicTransport": true,
            "hasParking": true
          },
          "to": {
            "name": "Jannowitzbrücke",
            "location": {
              "latitude": 52.51427,
              "longitude": 13.419347
            },
            "hasLocalPublicTransport": true,
            "hasParking": true
          }
        },
        ...
      ]
    }
  }
}


## Data Sources
Following data sources are currently technically implemented. You need to subscribe to each service at [developer.deutschebahn.com](https://developer.deutschebahn.com) to use them with 1BahnQL.

### API based sources:

- [x] Stationen (StaDa)
- [x] Fahrstühle (FaSta)
- [x] Fahrplan (Fahrplan-Free)
- [x] Flinkster 
- [x] Betriebsstellen
- [x] Reisezentren
- [x] Parkplätze
- [x] Bahnhofsfotos
- [ ] https://github.com/derhuerst/db-zugradar-client
- [ ] https://github.com/derhuerst/db-hafas
- [ ] https://github.com/derhuerst/generate-db-shop-urls
- [ ] https://github.com/derhuerst/find-db-station-by-name
- [ ] https://github.com/derhuerst/european-transport-modules
- [ ] https://github.com/derhuerst/vbb-lines
- [ ] https://github.com/derhuerst/db-stations

### static sources:
- [x] http://data.deutschebahn.com/dataset/data-bahnsteig
- [ ] http://data.deutschebahn.com/dataset/data-bahnsteig-regio
- [ ] http://data.deutschebahn.com/dataset/data-wagenreihungsplan-soll-daten
- [ ] http://data.deutschebahn.com/dataset/luftschadstoffkataster

## Root Queries

### Connection Search

tbi

### Stringbased Search
- [x] Station
- [ ] Zug

### Geo Search
- [x] Station
- [ ] Bahnsteig
- [x] Flinkster
- [x] Call a Bike
- [x] Parkplätze
- [ ] Zug
- [ ] Fahrstühle / Rolltreppen

### ID Access
- [x] EvaId (Station)
- [ ] DS100 (BetrSt)
- [ ] Zug
- [ ] Flinkster
- [ ] Call a Bike
- [ ] Fahrstühle / Rolltreppen
- [x] Parkplätze
- [ ] Bahnsteig
