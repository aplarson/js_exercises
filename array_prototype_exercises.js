Array.prototype.myUniq = function() {
  var uniqArray = [];
  for(var i = 0; i < this.length; i++){
    if(uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
};

Array.prototype.twoSum = function () {
  var twoSums = [];
  for(var i = 0; i < (this.length - 1); i++){
    for(var j = i + 1; j < this.length; j++){
      if((this[i] + this[j]) === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
};

Array.prototype.transpose = function () {
  var transposedMatrix = [];
  for(var i = 0; i < this.length; i++){
    for(var j = 0; j < this[0].length; j++){
      if (transposedMatrix[j]){
        transposedMatrix[j].push(this[i][j]);
      } else {
        transposedMatrix[j] = [this[i][j]];
      }
    }
  }
  return transposedMatrix;
};
