// document.addEventListener('DOMContentLoaded', function() {
//     chrome.storage.local.get(['temperature'], function(result) {
//         document.getElementById('weather').textContent = result.temperature ? `Current Temperature: ${result.temperature}°F` : 'Temperature data not available.';
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored temperature data
    chrome.storage.local.get(['temperature'], function(result) {
        let message;
        if (result.temperature) {
            const temp = parseFloat(result.temperature); // 66 // 65 // 64 // result.temperature
            // Check the temperature and determine the message
            if (temp > 65) {
                message = `Whoa! ${result.temperature}°F is too hot! Stay in and code :)`;
                // message = `Whoa! ${66}°F is too hot! Stay in and code :)`;
            } else if (temp < 65) {
                message = `Brrr! ${result.temperature}°F is too cold! Stay in and code :)`;
                // message = `Brrr! ${64}°F is too cold! Stay in and code :)`;
            } else {  // temp is exactly 65
                message = `${result.temperature}°F is perfect! ...Maybe code outside?`;
                // message = `${65}°F is perfect! ...Maybe code outside?`;
            }
        } else {
            message = 'Temperature data not available';
        }
        // Update the DOM with the message
        document.getElementById('weather').textContent = message;
    });
});


// Should I Go Outside? A tool for Codesmith students
  // check the temperature outside via the location of the user
    // give back the local temperature and an answer on whether or not to go outside
    // if above 65F, 'Whoa! Too hot out! Stay in and code :)'
    // if below 65F, 'Brrr... Too cold out! Stay in and code :)'
    // if it's exactly 65F, 'Too perfect out! Just stay in and CODE.'