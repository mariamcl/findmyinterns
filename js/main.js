//Main JS file
var allData = [];


var workmap;

loadData();

function loadData() {
	d3.json("data.json", function(error, collection) {

		allData = collection;

		console.log(allData);

  		createVis();
	});
}

function createVis() {

	workmap = new WorkMap("work-map", allData);
	
}