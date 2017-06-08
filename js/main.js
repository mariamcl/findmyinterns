//Main JS file
var hometownData = [];
var workData = [];
var uniData = [];


var hometownmap;
var workmap;
var universitymap;

var googleAPI = "https://maps.googleapis.com/maps/api/geocode/json?address=";

loadData();
loadDataWork();
loadDataUni();

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

function loadDataUni() {
	d3.json("intern_unidata.json", function(error, collection) {

		uniData = collection;

  		createVisUni();
	});
}

function createVisHome() {

	hometownmap = new HometownMap("hometown-map", hometownData);
	
}

function createVisWork() {
	workmap = new WorkMap("work-map", workData);
}

function createVisUni() {
	universitymap = new UniversityMap("university-map", uniData);
}