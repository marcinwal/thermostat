console.log("Hi Demkiw!");

var thermostat = new Thermostat();
var tempColor;

var updateTemperature = function(){

  switch(thermostat.consoleColor()){
    case 'lowUsage' : tempColor = "#32CD32";break;
    case 'mediumUsage' : tempColor = "#FFD700";break;
    case 'highUsage' :tempColor = "red";break;
  }
  
  $('#temperature').css('color',tempColor).text(thermostat.temperature);
  if (thermostat.savingMode){
      $('.PWS-mode').css('background','green').text("POWER SAVE IS ON");
  }else
  {
      $('.PWS-mode').css('background','red').text("POWER SAVE IS OFF");
  }


};

$(document).ready(function(){
  updateTemperature();

  $('.increase-temp').on('click', function(){
      thermostat.up();
      updateTemperature();
  });

  $('.decrease-temp').on('click', function(){
      thermostat.down();
      updateTemperature();
  });

  $('.reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('.PWS-mode').on('click',function(){
    thermostat.changeSaveMode();
    updateTemperature();
  });

});



