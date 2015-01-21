console.log("Hi Demkiw!");

var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature);
};

$(document).ready(function(){
  $('#temperature').text(thermostat.temperature);

  $('.increaseTemp').on('click', function(){
      thermostat.up();
  });
});



