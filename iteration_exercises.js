Array.prototype.bubbleSort = function() {
  var sorted = false;
  while(!sorted) {
    sorted = true;
    for(var i = 0; i < (this.length - 1); i++) {
      if(this[i] > this[i + 1]){
        var first = this[i];
        var second = this[i + 1];
        this[i] = second;
        this[i + 1] = first;
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([4, 3, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  var substringsArray = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      substringsArray.push(this.slice(i, j));
    }
  }
  return substringsArray;
};

console.log("applesauce".substrings());

