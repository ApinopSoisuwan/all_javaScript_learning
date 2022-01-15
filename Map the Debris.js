function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i in arr){
        let r = arr[i].avgAlt + earthRadius
        let op = 2 * Math.PI * Math.sqrt(Math.pow(r,3)/GM)
        arr[i] = {name: arr[i].name,orbitalPeriod:Math.round(op)}
    }
    return arr;
}
  
//console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

// formula T = 2*pi*sqrt(r^3/GM) // r = earthRadius+avgAlt,
//should return [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].