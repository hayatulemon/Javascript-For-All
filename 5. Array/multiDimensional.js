
// Multi Dimensional Array

var arr = [
    [78, 71, 90],
    [88, 77, 93],
    [76, 98, 77]
]
console.log(arr)
console.log(arr[0][0])
console.log(arr[1][1])

for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
        console.log('Element ' + i + ': ' +arr[i][j])
    }
}