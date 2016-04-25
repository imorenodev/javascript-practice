const sum = (acc, x) => acc + x;
console.log([1,2,4].reduce(sum,0));


var foods = [
  'apples',
  'oranges',
  'pizza',
  'cereal',
  'apples',
  'oranges',
  'pizza',
  'cereal',
  'apples',
  'oranges',
  'apples',
  'oranges',
  'pizza',
  'cereal',
  'apples',
  'oranges',
  'pizza',
  'cereal',
  'apples',
  'oranges'
];

var reducer = function(tally, vote) {
  console.log('Tally ', tally, ' Vote ', vote);
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var result = foods.reduce(reducer, {})
console.log(result);
