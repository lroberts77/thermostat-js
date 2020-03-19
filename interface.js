$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

  $('#temp-up').on('click', function(){
    thermostat.increase();
    updateTemperature();
  });
  $('#temp-down').click(function(){
    thermostat.decrease();
    updateTemperature();
  });
  $('#temp-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });
  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });
  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.ernergyUsage());
  };
});