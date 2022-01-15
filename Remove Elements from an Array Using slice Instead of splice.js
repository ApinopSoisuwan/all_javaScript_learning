function nonMutatingSplice(cities) {
    // Only change code below this line

    return cities.slice(0,3)
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
  console.log(nonMutatingSplice(inputCities))

  //nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].