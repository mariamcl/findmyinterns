WorkMap = function(_parentElement, _data) {

	this.parentElement = _parentElement;
	this.data = _data;

	this.initVis();
}

WorkMap.prototype.initVis = function() {

	var vis = this;

	console.log(vis.data);

	var width = 500,
		height = 600;

	var svg = d3.select("#" + vis.parentElement).append("svg")
		.attr("width", width)
		.attr("height", height);

	vis.map = L.map(vis.parentElement).setView([37.8,-96.9], 5);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	minZoom: 1.5,
    	maxZoom: 10
    }).addTo(vis.map);

	vis.data.forEach(function(d) {
		var marker = L.marker([d.lat, d.lng]).addTo(vis.map);
	});

	vis.wrangleData();
}

WorkMap.prototype.wrangleData = function() {
	var vis = this;

	vis.displayData = vis.data;
}

