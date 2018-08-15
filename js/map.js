var map = L.map('map').setView([41.483963, -82.687405], 16);

var OpenStreetMap_France = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

for (coaster in coasterData){
	if (coasterData[coaster]['Wait Time'] < 20){
		var color = 'green'
	}else if (coasterData[coaster]['Wait Time'] < 40){
		var color = 'yellow'
	}else{
		var color = 'red'
	}
	var circle = L.circleMarker([parseFloat(coasterData[coaster]['Latitude']), parseFloat(coasterData[coaster]['Longitude'])], {
    color: color,
    fillColor: color,
    fillOpacity: 0.5,
    radius: 15
	}).bindTooltip(coasterData[coaster]['Rollercoaster Name'], {
  sticky: true // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
}).addTo(map);
}