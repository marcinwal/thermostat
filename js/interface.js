console.log("Hi Demkiw!");

var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature);
 if (thermostat.savingMode){
     $('.PWS-mode').css('background','green').text("ON");
 }else
 {
     $('.PWS-mode').css('background','red').text("OFF");
 } 
};

$(document).ready(function(){
  $('#temperature').text(thermostat.temperature);
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
    // if (thermostat.savingMode){
    //     $('.PWS-mode').css('background','green');
    // }else
    // {
    //     $('.PWS-mode').css('background','red');
    // }
  });

});



