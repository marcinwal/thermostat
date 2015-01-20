var Thermostat = function(){
  this.temperature = 20;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  this.temperature += changeTempBy;
};