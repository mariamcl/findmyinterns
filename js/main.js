//Main JS file
var hometownData = [];
var workData = [];


var hometownmap;

var googleAPI = "https://maps.googleapis.com/maps/api/geocode/json?address=";

loadData();
loadDataWork();

function loadData() {
	d3.json("data.json", function(error, collection) {

		hometownData = collection;

  		createVisHome();
	});
}

function loadDataWork() {
	d3.json("intern_workdata.json", function(error, collection) {

		workData = collection;

  		createVisWork();
	});
}

function createVisHome() {

	hometownmap = new HometownMap("hometown-map", hometownData);
	
}

function createVisWork() {
	workmap = new WorkMap("work-map", workData);
}