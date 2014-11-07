function myUniq(array){
  var uniqArray = [];
  for(var i = 0; i < array.length; i++){
    if(uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

function twoSum(array){
  var twoSums = [];
  for(var i = 0; i < (array.length - 1); i++){
    for(var j = i + 1; j < array.length; j++){
      if((array[i] + array[j]) === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
}

function transpose(matrix){
  var transposedMatrix = [];
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[0].length; j++){
      if (transposedMatrix[j]){
        transposedMatrix[j].push(matrix[i][j]);
      } else {
        transposedMatrix[j] = [matrix[i][j]];
      }
    }
  }
  return transposedMatrix;
}
