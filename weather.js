
(function ($) {

  $(document).ready(function() {
    
    $("input[type='button']").click(function(){
        var radioValue = $("#weather_city").val();
    $('#weather_city').val(radioValue);
    processForm();
    
    });
  });
 
  /**
   * Callback to process the form.
   */
  function processForm() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      cache: false,
      data: {
        q: $('#weather_city').val()
      },
      // work with the response
      success: function (response) {
        $('#weather_name').text(response.name);
        $('#weather_description').text(response.weather[0].description);
        $('#weather_country').text(response.sys.country);
        $('#weather_temp').text(Math.round((9/5)*(response.main.temp - 273) + 32));
        $('#weather_humidity').text(response.main.humidity);
        $('#weather_clouds').text(response.clouds.all);
        $('#weather_wind').text(Math.round(response.wind.speed*2.23694));
      },
    });
  }
})(jQuery);
