// goal change every mention of the word 'code' to 'Codesmith'
  // regardless of context

// stretch goal: translate a random few words into a spanish

// Should I Go Outside? A tool for Codesmith students
  // check the temperature outside via the location of the user
    // give back the local temperature and an answer on whether or not to go outside
    // if above 65F, 'Whoa! Too hot out! Stay in and code :)'
    // if below 65F, 'Brrr... Too cold out! Stay in and code :)'
    // if it's exactly 65F, 'Too perfect out! Just stay in and CODE.'
/**
 * create a folder structure to store all files
 * fill out the manifest.json file (acts as configuration for the extension)
 *  - name, descrip, current version, and icons for extension
 *  - the chrome api keys 
 *  - the scripts for our content, html file, and extension service worker files
 * Service worker - event based script that runs separately from a web page
 * 
 * 
 * API TOKEN
 * a1a86e944a70f0
 */
function getCity() {
  fetch('https://ipinfo.io/json?token=a1a86e944a70f0')
  .then(response => response.json())
  .then(data => {
      if (data && data.city) {
          fetchCurrentWeather(data.city);
      }
  })
  .catch(error => {
      console.error('Failed to Get Your City:', error);
  });
}


function fetchCurrentWeather(city) {
  const weatherstackKey = '6132a94bfc46d5c76880f9a0baeaa774';
  const url = `http://api.weatherstack.com/current?access_key=${weatherstackKey}&query=${encodeURIComponent(city)}&units=m&language=en`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
      if (data && data.current) {
          const temperature = data.current.temperature;
          console.log(`Current temperature in ${city} is ${temperature}°C`);
          chrome.storage.local.set({temperature});
      }
  })
  .catch(error => {
      console.error('Failed to get the temperature:', error);
  });
}
// .catch(error => {
//   console.error('Failed to get the temperature')
// })


chrome.runtime.onInstalled.addListener(() => {
  getCity();
});