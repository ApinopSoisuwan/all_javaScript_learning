function mutation(arr) {
    let ar1 = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    for (var i = 0 ; i < test.length; i++){
        if (ar1.indexOf(test[i]) < 0) return false;
    }
return true;}

//console.log(mutation(["hello", "hey"]));
//console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
//console.log(['abc'][0].length)
console.log(mutation(["Noel", "Ole"]))

