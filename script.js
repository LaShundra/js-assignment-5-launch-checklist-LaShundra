// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, planet.distance, selectedlanet.moons, selectedPlanet.image);
     
   })
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const pilotInput = document.querySelector('[name=pilotName]');
       const copilotInput = document.querySelector('[name=copilotName]');
       const fuelLevelInput = document.querySelector('[name=fuelLevel]');
       const cargoMassInput = document.querySelector('[name=cargoMass]');
       const submitButton = document.getElementById('formSubmit');

       const faultyItems = document.getElementById('faultyItems');

       faultyItems.style.visibility = 'hidden';
        let form = document.querySelector("form");444


       submitButton.addEventListener('click', function(event) {
         event.preventDefault();
     
         let pilotValidation = validateInput(pilotInput.value);
         let copilotValidation = validateInput(copilotInput.value);
         let fuelLevelValidation = validateInput(fuelLevelInput.value);
         let cargoMassValidation = validateInput(cargoMassInput.value);
     
    
        formSubmission(document, faultyItems, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value);
        

    });
    
   
});