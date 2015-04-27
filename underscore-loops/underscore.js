// Complete your underscore exercises below

// 1

_.each([1,2,3], function(val) { console.log(val); });

_.each([1,2,3], function(val, index) { console.log(index); });

// 2

var checkValue = function(arr, val) {
  var found = false;
  for(var i = 0; i < arr.length; i++) {
    if(val === arr[i]) {
      found = true;
    }
  }
  return found;
}

// 3

var checkValue = function(arr, val) {
  var found = false;
  _.each(arr, function(value) {
    if(value === val) {
      found = true;
    }
  });
  return found;
};

// 4

/* The instructions don't ask you to create functions here, 
   so no worries if you didn't! Just make sure your logic is similar */

var objPusher = function(obj) {
  var arr = [];
  for(var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

// 5

var objPusher = function(obj) {
  return _.map(obj, function(val) {
    return val;
  });
};

// 6

var evensOnly = function(collection) {
  return _.filter(collection, function(val) {
    return !(val % 2);
  });
};


