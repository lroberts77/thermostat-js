'use strict';

function Thermostat(){
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
};

Thermostat.prototype.increase = function(){
    this.temperature += 1;
};

Thermostat.prototype.decrease = function(){
    if (this.isMinimumTemperature()) {
        return;
    }
    this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
    return this.powerSavingMode ===true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
    this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
    this.powerSavingMode = true;
};

Thermostat.prototype.increase = function(){
    if(this.isMaximumTemperature()) {
        return;
    }
    this.temperature += 1;
};

Thermostat.prototype.isMaximumTemperature = function(){
    if(this.isPowerSavingModeOn() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemperature = function(){
    this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
        return 'low_usage';
    }
    if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON){
        return 'medium_usage';
    }
    return 'high_usage';
};