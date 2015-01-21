var Thermostat = function(){
  this.temperature = 20;
  this.savingMode = true;
  this.step = 2; 
  this.minTemp = 10;
  this.powerSaveMax = 25;
  this.regularMax = 32;

};

Thermostat.prototype.up = function() {
  this._increaseTemperature(this.step);
};

Thermostat.prototype.down = function() {
  this._decreaseTemperature(this.step);
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.savingMode = true;
};

Thermostat.prototype.changeSaveMode = function(){
  if ((this.savingMode === false) && (this.temperature > this.powerSaveMax))
  {
    this.temperature = this.powerSaveMax;
  }
  this.savingMode = !this.savingMode;
};

Thermostat.prototype.consoleColor = function() {
  var greenTrigger = 18;
  var yellowTrigger = 25;
  if (this.temperature < greenTrigger) return 'green';
  if (this.temperature < yellowTrigger) return 'yellow';
  return 'red';
};

Thermostat.prototype._increaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature + changeTempBy;

  if (this.savingMode)
  {
     this.temperature = Math.min(currentTemp,this.powerSaveMax);
  } else
  {
    this.temperature = Math.min(currentTemp,this.regularMax);
  }
};

Thermostat.prototype._decreaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature - changeTempBy;
  this.temperature = Math.max(currentTemp,this.minTemp);
};



