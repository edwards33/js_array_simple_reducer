var data = [35, 4, 32];

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is: ", total);
