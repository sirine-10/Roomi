

// Toggle between landlord and roommate forms
document.getElementById('landlord-btn').addEventListener('click', function() {
    console.log("Landlord button clicked");
    document.getElementById('landlord-form').classList.remove('hidden');
    document.getElementById('roommate-form').classList.add('hidden');
  });
  
  document.getElementById('roommate-btn').addEventListener('click', function() {
    console.log("Roommate button clicked");
    document.getElementById('roommate-form').classList.remove('hidden');
    document.getElementById('landlord-form').classList.add('hidden');
  });
// Detecting location for Landlord
document.getElementById('get-location')?.addEventListener('click', function() {
    console.log("Getting landlord location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById('location').value = `Lat: ${latitude}, Lon: ${longitude}`;
      }, function(error) {
        alert('Unable to retrieve location. Please allow location access.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  


