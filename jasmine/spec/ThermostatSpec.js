'use strict';

describe('Thermostat', function(){

    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it('displays 20 as a default temp', function(){
        expect(thermostat.temperature).toEqual(20);

    });

    it('increases the temperature by amount', function(){
        thermostat.increase()
        expect(thermostat.temperature).toEqual(21)
    });
    it('decreases the temperature by amount', function(){
        thermostat.decrease()
        expect(thermostat.temperature).toEqual(19)
    });
    it('has a minimum temperature of 10', function(){
        for (var i = 0; i < 11; i++){
            thermostat.decrease();
        }
        expect(thermostat.temperature).toEqual(10)
    });

    it('has power saving mode on by default', function(){
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch PSM off', function(){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch PSM back on', function(){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    describe('when power saving mode is on', function(){
        it('has a maximum temperature of 25', function(){
            for (var i = 0; i < 6; i++){
                thermostat.increase();
            }
            expect(thermostat.temperature).toEqual(25);
        });
    });

    describe('when power saving mode is off', function(){
        it('has a maximum temperature of 32', function(){
            thermostat.switchPowerSavingModeOff();
            for (var i = 0; i < 13; i++) {
                thermostat.increase();
            }
            expect(thermostat.temperature).toEqual(32);
        });
    });

    it('can be reset to the default temperature', function(){
        for (var i = 0; i < 6; i++) {
            thermostat.increase();
        }
        thermostat.resetTemperature();
        expect(thermostat.temperature).toEqual(20);
    });

    describe('displaying usage levels', function(){
        describe('when the temperature is below 18', function(){
            it('it is considered low usage', function(){
                for (var i = 0; i < 3; i++) {
                    thermostat.decrease();
                }
                expect(thermostat.energyUsage()).toEqual('low_usage');
            });
        });
        describe('when the temperature is anything else', function(){
            it('it is considered medium_usage', function(){
                expect(thermostat.energyUsage()).toEqual('medium_usage');
            });
        });
        describe('when the temperature is anything else', function(){
            it('it is considered high_usage', function(){
                thermostat.powerSavingMode = false;
                for (var i = 0; i < 6; i++){
                    thermostat.increase();
                }
                expect(thermostat.energyUsage()).toEqual('high_usage');
            });
    
            
        });
    });

});