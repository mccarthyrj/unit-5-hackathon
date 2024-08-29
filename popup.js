document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['temperature'], function(result) {
        document.getElementById('weather').textContent = result.temperature ? `Current Temperature: ${result.temperature}°F` : 'Temperature data not available.';
    });
});
