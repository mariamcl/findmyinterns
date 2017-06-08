  var config = {
    apiKey: "AIzaSyAlRibIosnDO4QwzUPFXGJIjeHdZDff3KE",
    authDomain: "find-my-interns.firebaseapp.com",
    databaseURL: "https://find-my-interns.firebaseio.com",
    storageBucket: "find-my-interns.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


  function getData(){
  	$("#table").empty();
  	//get length of inputted value 
	var x = $('#frm1').val();
	x = x.split(" ");
	var length_min = x.length;
  	
  	//parses through each intern one at a time 
  	var studentsRef = firebase.database().ref('interns');
  	studentsRef.orderByChild("Last Name").on("child_added", function(data) {	
  		//convert value into json
  		var students =JSON.stringify(data);
  		var student = JSON.parse(students);

  		//counter to keep track of matches 
  		var counter = 0;
  		//check if value matches name, school, c1 location or hometown
  		var i;
  		for(i=0; i <length_min; i++){
  			x[i] = x[i].toLowerCase();
			if(student["Last Name"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
			else if(student["First Name"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
			else if(student["Hometown"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
			else if(student["School"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
			else if(student["C1 Location"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
			else if(student["Preferred Name"].toLowerCase().indexOf(x[i]) !== -1){
				counter++;
			}
		}
		if((counter==length_min) && (counter!==0)){
			console.log(students);
			 var field = student["First Name"] + " " + student["Last Name"] + ", from " + student["Hometown"] + ", goes to " + student["School"] + ", working in " + student["C1 Location"];
			var row = $('<tr></tr>');
			row.append($('<th>')).text(field);
			$("#table").append(row);
		}
  	});
	  

  }



  $(document).ready(function(){
  	var button = $("#button1");

  });