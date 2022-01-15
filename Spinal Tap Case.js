function spinalCase(str) {
    let i = str.toLowerCase().trim().split(/\s|_|(?=[A-Z])/).join('-')
    return i;
  }

//console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase(("AllThe-small Things")))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("thisIsSpinalTap"))