function truncateString(str, num) {
    let answer = '';
    for (let i in str){
        if( i < num){
        answer += str[i]      
    }
    else if (i == num){
        answer += "..."
    }}
    return answer
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

