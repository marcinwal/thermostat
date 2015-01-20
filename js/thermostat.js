var Thermostat = function(){
  this.temperature = 20;
  this.savingMode = true;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var temp = this.temperature + changeTempBy
  if (this.savingMode)
  {
     this.temperature = Math.min(temp,25);
  } else
  {
    this.temperature = Math.min(temp,32);
  }
};