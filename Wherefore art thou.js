function whatIsInAName(collection, source) {
    const arr = [];
    let core = Object.keys(source)

    return collection.filter(function(arr){
        return core.every(function (key){
            return arr.hasOwnProperty(key) && arr[key] === source[key]
        })
    })

    // Only change code above this line
    return arr;
  }
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
//should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }])
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) 
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].)
/*for (let p in test){
    console.log(test[p])
}*/

