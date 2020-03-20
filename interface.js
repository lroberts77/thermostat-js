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
    $('#temperature').attr('class', thermostat.energyUsage());
  };
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
// $('#current-city').change(function(){
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp)
//   })
  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    });
  });
});