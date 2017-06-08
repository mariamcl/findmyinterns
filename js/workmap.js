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

	vis.map = L.map(vis.parentElement, {center: [37.8, -96.9], zoom: 4});

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    	minZoom: 2,
    	maxZoom: 10,
    }).addTo(vis.map);

    vis.map.fitWorld().zoomOut();

    var circles = L.markerClusterGroup();

	vis.data.forEach(function(d) {

		var popup = d["Full Name"] + "<br><strong>" + d["C1 Location"] + "</strong>";

		var circle = L.marker([d.Lat, d.Long]).bindPopup(popup).on("click", onClick);

		function onClick() {
			swal({
				title: d["Full Name"],
				text: d["Hometown"],
				showCancelButton: true,
				confirmButtonText: "Add Info",
				closeOnConfirm: false
			},
			function () {
				swal({
				  title: "Add your Phone Number",
  				  type: "input",
				  showCancelButton: true,
				  closeOnConfirm: false,
				  confirmButtonText: "Next",
				  inputPlaceholder: "phone number"
			},
			function (inputvalue1) {
					if (inputvalue1 === false) return false;

					if (inputvalue1 === "") {
						return false;
					}

					swal({
					  title: "Add a your email",
	  				  type: "input",
					  showCancelButton: true,
					  closeOnConfirm: false,
					  inputPlaceholder: "email"
					},
					function(inputvalue2) {
						if (inputvalue1 === false) return false;

						if (inputvalue1 === "") {
							return false;
						}
							swal("Nice!", "You updated your information!", 	writeUserData(d["EIDs"], inputvalue1, inputvalue2))
						}

			)})})};

		circle.on('mouseover', function (e) {
            this.openPopup();
        });
        circle.on('mouseout', function (e) {
            this.closePopup();
        });

		circles.addLayer(circle);
	});

		function writeUserData(EID, phonenumber, email) {
		var studentsRef = firebase.database().ref('interns');
		var counter = 0;
  		studentsRef.orderByChild("Last Name").on("child_added", function(data) {
  			var interns = JSON.stringify(data);
  			var intern = JSON.parse(interns);
			if (intern["EIDs"] == EID) {
				firebase.database().ref('interns/' + counter).update({
				"Phone Number": phonenumber,
		    	Email: email
	  		});
		}
		counter++;
	})};

	vis.map.addLayer(circles);

	vis.wrangleData();
}

WorkMap.prototype.wrangleData = function() {
	var vis = this;

	vis.displayData = vis.data;
}

