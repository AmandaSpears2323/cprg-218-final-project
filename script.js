async function fetchplace(city) {
    const apiKey = '5ae2e3f221c38a28845f05b662c922bbe0a06424c82867d3e76b0194';
    const apiUrl = 'https://api.opentripmap.com/0.1/en/places/geoname?name=' + city +'&apikey=5ae2e3f221c38a28845f05b662c922bbe0a06424c82867d3e76b0194';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  }
  
  async function selectListChangeHandler(){
    const seld = document.getElementById("select-city");
    if(seld.options[seld.selectedIndex].text == 'Choose'){
        alert('Please select a city from the list');
    }
    else{
     
            fetchplace(seld.options[seld.selectedIndex].text)
            .then(data => 
                {
                const lblCity = document.getElementById("lblCity");
                lblCity.innerHTML = data.name;
                const lblCountry = document.getElementById("lblCountry");
                lblCountry.innerHTML = data.country;
                const lblTimezone = document.getElementById("lblTimezone");
                lblTimezone.innerHTML = data.timezone;
                const lblPopulation = document.getElementById("lblPopulation");
                lblPopulation.innerHTML = data.population;				
                })
    }
      }
  
    const seld = document.getElementById("select-city");
  
    seld.addEventListener('change', selectListChangeHandler);
