describe('Thermostat', function(){
  
  var thermostat;
    
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('by default', function(){

    it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it('starts in power saving mode', function(){
      expect(thermostat.savingMode).toBe(true)
    });


  });

  describe('changing temperature', function(){

    it('can increase', function(){
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

     it('can decrease the temperature', function(){
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('has maximum temperature', function(){

    it('it cannot increase above 32',function(){
      thermostat.savingMode = false;
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toBeLessThan(33);
    });

    it('in power saving mode cannot increase above 25 in power saving',function(){
      thermostat.increaseTemperature(26);
      expect(thermostat.temperature).toBeLessThan(26);
    });
  });

  describe('it has a minimum temperature', function(){

    it('can not decrease below 10', function(){
      thermostat.decreaseTemperature(15.5);
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('it has saving power on/off button',function(){
    it('can switch saving mode to off',function(){
      expect(thermostat.savingMode).toBe(true);
      thermostat.changeSaveMode();
      expect(thermostat.savingMode).toBe(false);
    });

    it('can switch saving mode to on',function(){
      thermostat.changeSaveMode();
      expect(thermostat.savingMode).toBe(false);
      thermostat.changeSaveMode();
      expect(thermostat.savingMode).toBe(true);
    });
  });

  describe('it has a reset button', function(){

    it('it should change temperature to 20', function(){
      thermostat.increaseTemperature(10);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('it should change to power save mode', function(){
      thermostat.changeSaveMode();
      thermostat.reset();
      expect(thermostat.savingMode).toBe(true);
    });
  });

  describe('it can provide us with color',function(){

    it('should be yellow when it starts',function(){
      expect(thermostat.consoleColor()).toEqual("yellow");
    });

    it('should be green when temperature is below 18', function(){
      thermostat.decreaseTemperature(5);
      expect(thermostat.consoleColor()).toEqual("green");
    });

    it('should be red when temperature is above 25', function(){
      thermostat.increaseTemperature(10);
      expect(thermostat.consoleColor()).toEqual("red");
    });
  });
});