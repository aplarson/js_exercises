var range = function (start, end) {
  if (start > end) {
    return [];
  } else {
    return [start].concat(range(start + 1, end));
  }
};

Array.prototype.arraySumRecursive = function() {
  if(this.length === 0) {
    return 0;
  } else {
    return this[this.length - 1] + (this.slice(0, this.length - 1)).arraySumRecursive();
  }
};

Number.prototype.firstExponent = function (exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return this * (this.firstExponent(exponent - 1));
  }
};

Number.prototype.secondExponent = function (exponent) {
  if (exponent === 0) {
    return 1;
  } else if(exponent === 1) {
    return this;
  } else if((exponent % 2) === 0) {
    return this.secondExponent((exponent / 2)) *
          this.secondExponent((exponent / 2));
  } else {
    return this * this.secondExponent(((exponent - 1) / 2)) *
          this.secondExponent(((exponent - 1) / 2));
  }
};

Number.prototype.iterativeFibonacci = function () {
  if (this === 1) {
    return [0];
  } else {
    var fibArray = [0, 1];
    for (var i = 1; i < (this - 1); i++) {
      fibArray.push(fibArray[i] + fibArray[i -  1]);
    }
  }
  return fibArray;
};

function recursiveFibonacci(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    var fib = recursiveFibonacci(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib
}

Array.prototype.binarySearch = function (target) {
  var midpoint = Math.floor((this.length) / 2);
  
  if (this[midpoint] === target) {
    return midpoint;
  } else if (this.length === 0) {
    return null;
  } else if (this[midpoint] > target) {
    return (this.slice(0, midpoint)).binarySearch(target);
  } else {
    var rightSearch = (this.slice(midpoint + 1, this.length)).binarySearch(target);
    if (rightSearch === null) {
      return rightSearch;
    } else {
      return midpoint + 1 + rightSearch;
    }
  }
};

function makeChange(amt, coins) {
  var largestCoin = coins[0];
  
  if (coins.length === 0) {
    return [];
  } else if (coins.length === 1) {
    var moreCoins = [];
    for (var i = 0; i < amt / largestCoin; i++) {
      moreCoins.push(largestCoin);
    }
    return moreCoins;
  } else if (amt === 0) {
    return [];
  }
  
  var maxMax = Math.floor(amt / largestCoin);
  var bestCurrent = [];
  var largeCoins = [];
  var amount = amt
  
  for (var i = 0; i <= maxMax; i++) {
    if (i > 0) {
      largeCoins.push(largestCoin);
      amount -= largestCoin
    }
    
    var possibility = largeCoins.concat(makeChange((amount), coins.slice(1, coins.length)));
    
    if (bestCurrent.length === 0 || bestCurrent.length > possibility.length) {
      bestCurrent = possibility;
    }
  }
  
  return bestCurrent;
}

Array.prototype.mergeSort = function () {

  if (this.length <= 1) {
    return this;
  }
  
  var midpoint = Math.floor(this.length / 2);
  var left = this.slice(0, midpoint);
  var right = this.slice(midpoint, this.length);
  
  return left.mergeSort().merge(right.mergeSort());
};

Array.prototype.merge = function(other_array) {
  var mergedArray = [];
  
  while (this.length > 0 && other_array.length > 0) {
    if (this[0] > other_array[0]) {
       mergedArray.push(other_array.shift());
    } else {
       mergedArray.push(this.shift());
    }
  }
  
  return mergedArray.concat(this).concat(other_array);
};

Array.prototype.subsets = function () {
  if (this.length === 0) {
    return [[]];
  } else {
    var lastValue = this[this.length - 1];
    var subSubset = this.slice(0, (this.length - 1)).subsets();
    var newSubsets = [];
    
    for (var i = 0; i < subSubset.length; i++) {
      newSubsets.push(subSubset[i].concat([lastValue]));
    }
  }
  
  return subSubset.concat(newSubsets);
}

