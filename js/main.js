//Main JS file
var allData = [];


var map;

loadData();

function loadData() {
	d3.json("worklocations.json", function(error, graph) {
  		alert(error);
	})
}