HometownMap = function(_parentElement, _data) {

	this.parentElement = _parentElement;
	this.data = _data;

	this.initVis();
}

HometownMap.prototype.initVis = function() {

	var vis = this;

	console.log(vis.data);

	var width = 500,
		height = 600;

	var svg = d3.select("#" + vis.parentElement).append("svg")
		.attr("width", width)
		.attr("height", height);

	vis.map = L.map(vis.parentElement, {maxBounds: L.latLngBounds(L.latLng(-81, -181, true), L.latLng(91, 191, true))});

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    	minZoom: 2,
    	maxZoom: 10,
    }).addTo(vis.map);

    vis.map.fitWorld().zoomOut();

    var circles = L.markerClusterGroup();

	vis.data.forEach(function(d) {

		var popup = d["Full Name"];

		console.log(popup);

		var circle = L.marker([d.Lat, d.Long]).bindPopup(popup);

		circle.on('mouseover', function (e) {
            this.openPopup();
        });
        circle.on('mouseout', function (e) {
            this.closePopup();
        });

		circles.addLayer(circle);
	});

	vis.map.addLayer(circles);

	vis.wrangleData();
}

HometownMap.prototype.wrangleData = function() {
	var vis = this;

	vis.displayData = vis.data;
}

