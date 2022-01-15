function confirmEnding(str, target) {
    const i = str.split(" ")
    const f = i.pop()
    console.log(f)
    return f.endsWith(target); //ver.1
  }
function confirmEnding02(str, target) {
    return str.slice(-target.length) === target
}
  
  console.log(confirmEnding02("Bastian", "n"));
  console.log(confirmEnding02("He has to give me a new name", "name"));