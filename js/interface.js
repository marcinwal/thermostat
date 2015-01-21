console.log("Hi Demkiw!");

var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature);
     if (thermostat.savingMode){
         $('.PWS-mode').css('background','green').text("POWER SAVE ON");
     }else
     {
         $('.PWS-mode').css('background','red').text("POWER SAVE OFF");
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



