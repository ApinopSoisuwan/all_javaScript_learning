function titleCase(str) {

    let sen = '';
    let i = str.split(' ');
    for (let up in i){
        i[up] = i[up].toLowerCase()
        sen += i[up].replace(i[up][0],i[up][0].toUpperCase()) + ' ' ;
    }
    return sen.trimEnd()
  }
  
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"))