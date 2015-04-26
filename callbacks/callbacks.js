// Complete your callback exercises below

// 1

var funcCaller = function(func, arg) {
  return func(arg);
};

// 2

var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};

// 3

var firstVal = function(list, func) {
  if(Array.isArray(list)) {
    func(list[0], 0, list);
  } else {
    for(var key in list) {
      return func(list[key], key, list);
    }
  }
};
