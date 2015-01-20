var Thermostat = function(){
  this.temperature = 20;
  this.savingMode = true;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature + changeTempBy;
  var powerSaveMax = 25;
  var regularMax = 32;
  if (this.savingMode)
  {
     this.temperature = Math.min(currentTemp,powerSaveMax);
  } else
  {
    this.temperature = Math.min(currentTemp,regularMax);
  }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature - changeTempBy;
  var minTemp = 10;
  this.temperature = Math.max(currentTemp,minTemp);
};

Thermostat.prototype.changeSaveMode = function(){
  this.savingMode = !this.savingMode;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.savingMode = true;
};

Thermostat.prototype.consoleColor = function() {
  var greenTrigger = 18;
  var yellowTrigger = 25;
  if (this.temperature < greenTrigger) return 'green';
  if (this.temperature < yellowTrigger) return 'yellow';
  return 'red';
};