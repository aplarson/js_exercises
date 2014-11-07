Array.prototype.doubleArray = function() {
  var results = [];
  for (var i = 0; i < this.length; i++) {
    results[i] = this[i] * 2;
  }
  return results;
};

// console.log([1,2,3,4].doubleArray());

Array.prototype.myEach = function (callback) {
  for(var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

var cb = function (num) { console.log(num * 2); };

// console.log([1, 2, 3, 4].myEach(cb));

Array.prototype.myMap = function (callback) {
  var mappedArray = [];

  this.myEach(function (el) { mappedArray.push(callback(el)); });

  return mappedArray;
};

cb = function (num) { return num * 2; };
// console.log([1, 2, 3, 4].myMap(cb));

Array.prototype.inject = function() {
  var sum = 0;
  this.myEach(function (el) { sum += el; });
  return sum;
};

 console.log([1, 2, 3].inject());