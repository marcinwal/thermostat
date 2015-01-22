console.log("Hi Demkiw!");

var thermostat = new Thermostat();
var tempColor;

var updateTemperature = function(){

switch(thermostat.consoleColor()){
  case 'lowUsage' : tempColor = "#808000";break;
  case 'mediumUsage' : tempColor = "#FFD700";break;
  case 'highUsage' :tempColor = "red";break;
}
  
$('#temperature').css('color',tempColor).text(thermostat.temperature);
    if (thermostat.savingMode){
      $('#buttonThree').attr('checked', true)}
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

  $('#buttonThree').on('click',function(){
    thermostat.changeSaveMode();
    updateTemperature();
  });
});



