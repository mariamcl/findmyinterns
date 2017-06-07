//this is the google script code

function getLong(adress) {
  try{
    if(adress=="")return("");
    var geo = Maps.newGeocoder().geocode(adress);
    if(geo.status=="OK"){
      var lng = geo.results[0].geometry.viewport.southwest.lng;
      return(lng);
    }
    else{
      return("error");
    }
  }
  catch(err){
    return(err);
  }
}

function getLat(adress) {
  try{
    if(adress=="")return("");
    var geo = Maps.newGeocoder().geocode(adress);
    if(geo.status=="OK"){
      var lat = geo.results[0].geometry.viewport.southwest.lat;
      return(lat);
    }
    else{
      return("error");
    }
  }
  catch(err){
    return(err);
  }
}

