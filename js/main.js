//Main JS file
var allData = [];


var hometownmap;

var googleAPI = "https://maps.googleapis.com/maps/api/geocode/json?address=";

loadData();

function loadData() {
	d3.json("data.json", function(error, collection) {

		allData = collection;

		console.log(allData);

  		createVis();
	});
}

function createVis() {

	hometownmap = new HometownMap("hometown-map", allData);
	
}