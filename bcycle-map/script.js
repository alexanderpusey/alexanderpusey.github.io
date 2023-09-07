let station_status = null
let station_information = null
let stationdata = null

// https://gbfs.bcycle.com/bcycle_boulder/station_status.json
// https://gbfs.bcycle.com/bcycle_boulder/station_information.json



window.addEventListener('load', () => {
    fetch("https://gbfs.bcycle.com/bcycle_boulder/station_status.json")
        .then(res => res.json())
        .then(result => {
            station_status = result
            fetch("https://gbfs.bcycle.com/bcycle_boulder/station_information.json")
                .then(res => res.json())
                .then(result => {
                    station_information = result
                    stationdata = mergeJson(station_status, station_information)
                    populateMarkers()
                })
        })
})

function mergeJson(json1, json2) {
    for (let i = 0; i < json1.data.stations.length; i++) {
        for (s2 of json2.data.stations) {
            if (s2["station_id"] == json1.data.stations[i]["station_id"]) {
                json1.data.stations[i]["lat"] = s2["lat"]
                json1.data.stations[i]["lon"] = s2["lon"]
                json1.data.stations[i]["name"] = s2["name"]
            }
        }
    }
    return json1
}

mapboxgl.accessToken = 'pk.eyJ1IjoicGxlYXNlc3RvcCIsImEiOiJjbGcyZ2pwamgwNTQxM2Vxc3Awbmc5cmwxIn0.lA5XXoeduVUgpn8ePlhF8g';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: [-105.26, 40.02], // starting position [lng, lat]
    zoom: 12.5 // starting zoom
});

function populateMarkers() {
    console.log(stationdata.data.stations)
    for (const marker of stationdata.data.stations) {
        const el = document.createElement('div')
        el.className = 'marker'
        if (marker.num_bikes_available == 0) {
            el.style.backgroundColor = 'red'
        }
        else if (marker.num_bikes_available <= 2) {
            el.style.backgroundColor = 'lightcoral'
        }
        else if (marker.num_bikes_available <= 5) {
            el.style.backgroundColor = 'yellow'
        }
        else if (marker.num_bikes_available > 5) {
            el.style.backgroundColor = 'lightgreen'
        }
        el.innerHTML = marker.num_bikes_available

        el.addEventListener('click', () => {
            window.alert(
                marker.name + '\n' +
                'Bikes available: ' +
                marker.num_bikes_available + '\n' +
                'Docks available: ' +
                marker.num_docks_available + '\n' +
                'Station ID: ' +
                marker.station_id
            )
        })

        new mapboxgl.Marker(el)
            .setLngLat([marker.lon,marker.lat])
            .addTo(map)
    }
}