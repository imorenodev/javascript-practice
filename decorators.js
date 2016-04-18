const not = (fn) => (x) => !fn(x);
const even = (x) => x % 2 === 0;
const notEven = not(even);

console.log('Three is not even: ' + notEven(3));

// the once combinator
const once = (fn) => {
  let done = false;
  return function(x) {
    return done ? void 0: ((done = true), fn.apply(this, arguments));
  }
}

const checkout = once( () => console.log('all checked out!') );
checkout(); //'all checked out'
checkout(); //undefined


//the unary decorator
const unary = (fn) =>
fn.length === 1 ? fn : function (x) {
  return fn.call(this, x);
}

['1', '2', '3'].map(unary(parseInt))
// [1, 2, 3]
