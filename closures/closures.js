// Complete your closure exercises below

// 1

var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  blab();
};

// 2

var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
};

// 3

var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
};

var blabLater = nonsense("Some string!");
var blabAgainLater = nonsense("I'm more than just some string.");

// Inspect blabLater and blabAgainLater in your console. They're functions--check out what happens when you run them!

// 4

var lastNameTrier = function(firstName) {
  return function(lastName) {
    console.log(firstName + " " + lastName);
  };
};

// 5

var storyWriter = function() {
  var story = "";
  return {
    addWords: function(string) {
      story += " " + string;
      return story;
    },
    erase: function() {
      story = "";
    }
  };
};

// 6 & 7

// Toaster and Super Mario require you to be creative. I hate to squish that with an official answer, so I'm not going to give one.
// Get in touch with me if you need help on these two.

// 8

var checkAttendanceFunc = function(nameArr){
  var resultArr = [];
  for(var i = 0; i < nameArr.length; i++){
    (function(j) {
        resultArr.push(function(){ console.log('Is', nameArr[j], 'present?', j)})
    })(i)
  };
  return resultArr;
};

// 9

// Leaving the very last extra-credit problem to you. Enjoy! (And contact me with questions)
