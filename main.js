// goal change every mention of the word 'code' to 'Codesmith'
  // regardless of context

// stretch goal: translate a random few words into a spanish


 * create a folder structure to store all files
 * fill out the manifest.json file (acts as configuration for the extension)
 *  - name, descrip, current version, and icons for extension
 *  - the chrome api keys 
 *  - the scripts for our content, html file, and extension service worker files
 * Service worker - event based script that runs separately from a web page
 * 
 * 
 * API TOKEN(s)
 * a1a86e944a70f0 // 41a33d8335243e6bfec3353a212f6f2f
 */

function getCity() {
  fetch('https://ipinfo.io/json?token=a1a86e944a70f0')
  .then(response => response.json())
  .then(data => {
    if (data && data.city) {
      fetchCurrentWeather(data.city)
  .catch(error => {
      console.error('Failed to Get Your City:', error);
    });
    }
  })
}

function fetchCurrentWeather(city) {
//   // const weatherstackKey = '966a13e1c57e462a61c99729438eabeb'; // 'https://api.weatherstack.com/current?access_key=41a33d8335243e6bfec3353a212f6f2f&query=${encodeURIComponent(city)}
const url = `https://api.weatherstack.com/current?access_key=41a33d8335243e6bfec3353a212f6f2f&query=${encodeURIComponent(city)}&units=f`;
//   console.log(url);

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
      console.error('Failed to get the temperature:', error)
  });
}

chrome.runtime.onInstalled.addListener(() => {
  getCity();
});

