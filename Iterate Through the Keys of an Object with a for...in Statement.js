function countOnline(usersObj) {
    let count = 0 
    for (let i in usersObj){
        if (usersObj[i].online == true){
            count ++;
        }
    }return count
    
  }



console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }))
console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }))