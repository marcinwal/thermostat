console.log("Hi Demkiw and Marcin ");

var thermostat = new Thermostat();
var tempColor;

var updateTemperature = function(){

// switch(thermostat.consoleColor()){
//   case 'lowUsage' : tempColor = "#808000";break;
//   case 'mediumUsage' : tempColor = "#FFD700";break;
//   case 'highUsage' :tempColor = "red";break;
// }

  
$('#temperature').text(thermostat.temperature);
$('#temperature').attr('class',thermostat.consoleColor());
$('#power-text').attr('class',thermostat.consoleColor());
if (thermostat.savingMode)
{
  $('.PWS-mode').text('power mode: on');
}else
{
  $('.PWS-mode').text('power mode: off');
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



