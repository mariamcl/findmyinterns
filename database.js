  var config = {
    apiKey: "AIzaSyAlRibIosnDO4QwzUPFXGJIjeHdZDff3KE",
    authDomain: "find-my-interns.firebaseapp.com",
    databaseURL: "https://find-my-interns.firebaseio.com/",
    storageBucket: "find-my-interns.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();