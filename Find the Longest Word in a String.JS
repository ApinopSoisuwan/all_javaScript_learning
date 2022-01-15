function findLongestWordLength(str) {
    const i = str.split(" ")
    let count = []
    for (c in i) {
        count.push(i[c].length)
    }
    return Math.max(...count)
}
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));