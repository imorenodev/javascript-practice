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
