UniversityMap = function(_parentElement, _data) {

	this.parentElement = _parentElement;
	this.data = _data;

	this.initVis();
}

UniversityMap.prototype.initVis = function() {

	var vis = this;

	console.log(vis.data);

	var width = 500,
		height = 600;

	var svg = d3.select("#" + vis.parentElement).append("svg")
		.attr("width", width)
		.attr("height", height);

	vis.map = L.map(vis.parentElement, {center: [37.8, -96.9], zoom: 4});

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    	minZoom: 2,
    	maxZoom: 10,
    }).addTo(vis.map);

    vis.map.fitWorld().zoomOut();

    var circles = L.markerClusterGroup();

	vis.data.forEach(function(d) {

		var popup = d["Full Name"] + "<br><strong>" + d["School"] + "</strong>";

		var circle = L.marker([d.Lat, d.Long]).bindPopup(popup).on("click", onClick);

		function onClick() {
			swal({
				title: d["Full Name"],
				text: d["School"]
			})
		};

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

UniversityMap.prototype.wrangleData = function() {
	var vis = this;

	vis.displayData = vis.data;
}


