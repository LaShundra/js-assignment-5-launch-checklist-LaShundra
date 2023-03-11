// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    missionTarget = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
        `;
                    

}

function validateInput(testInput) {
    if(!testInput){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a number";
    } else {
        return "Is a number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");


   if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty") {
    alert('All fields are required.');
  } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number") {
    alert('Please enter valid pilot and copilot names.');
  } else {
    list.style.visibility ="visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;

      if(fuelLevel < 10000) {
        fuelStatus.innerHTML = 'Fuel level too low for launch.';
    } else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch.';
    }

    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch.';
    } else {
        cargoStatus.innerHTML = 'Cargo mass is low enough for launch.';
    }


    if (fuelLevel < 10000 || cargoLevel > 10000) {
        launchStatus.innerHTML = 'Shuttle not ready for launch.';
        launchStatus.style.color = 'rgb(199, 37, 78)';
        list.style.visibility = 'visible';
    } else {
        launchStatus.innerHTML = 'Shuttle is ready for launch.';
        launchStatus.style.color = 'rgb(65, 159, 106)';
    }
}
}

 
async function myFetch() {
    let planetsReturned;

   planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        if (response.status >= 400) {
            throw new Error ("Bad response");
        } else {
               response.json()
        }
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * planets.length);
    return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
