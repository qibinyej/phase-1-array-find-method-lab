
// //function superbowlWin(element){
//     const result = element.find(element => element.result === 'W')
//     if(result){
//     return result.year}
// }

//const record =[]

//record.find(callback);

function superbowlWin(array){
    const result = array.find(element => element.result === 'W')
    if(result){
    console.log(result.year)
        return result.year
    }
}
