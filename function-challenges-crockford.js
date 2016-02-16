//Working through Douglas Crockford's
//course - Javscript The Good Parts
function identity(x) {
  return x;
}
function add(x, y) {
  return x + y;
}
function mul(x, y) {
  return x * y;
}
function identifyF(x) {
  return function() {
    return x;
  };
}
function addF(x) {
  return function(y) {
    return x + y;
  };
}
function applyF(f) {
  return function(x) {
    return function(y) {
      return f(x,y);
    };
  };
}
function curry(f, x) {
  return function(y) {
    return f(x, y);
  };
}
function inc(x) {
  return add(x, 1);
}
function inc(x) {
  return addF(x)(1);
}
function inc(x) {
  return curry(add, x)(1);
}
function methodize(f) {
  return function(x) {
    return f(this, x);
  };
}
function methodize(f) {
  return function(y) {
    return curry(f, this)(y);
  }
}
function demethodize(m) { //m is the 'methodized' function
  return function(that, x) { //that will be the parameter passed as 'this' in the methodized function
    return m.call(that, x); //by using call we are explicitly passing 'that' to be the 'this' in the methodized function
  }
}
Number.prototype.add = methodize(add);
Number.prototype.mul = methodize(mul);
var nSum = demethodize(Number.prototype.add)(5, 3);

function twice(f) {
  return function(x) {
    return f(x, x);
  };
}
var dub = twice(add);
var multi = twice(mul);

function composeU(u1, u2) {
  return function(x) {
    return u2(u1(x));
  }
}
var comp = composeU(twice(add),twice(mul))(3);

function composeB(b1, b2) {
  return function(x, y, z) {
    return b2(b1(x, y), z);
  }
}
var compB = composeB(add, mul)(2, 3, 5);

function once(f) {
  return function() { //returns closure over argument 'f'
    var func = f; //save 'f' function passed as argument for one-time use
    f = null; //set 'f' to null for future calls on closure
    return func.apply(this, arguments); //explicitly call func with applied 'this' and pass in the array-like arguments list
  };
}
function once(f) {
  var wishes = 3;
  return function() {
    if (wishes > 0) {
      wishes--;
      return f.apply(this, arguments);
    }
  }
}
var add_once = once(add); //add_once is a closure over the outter function's var's and arguments
/* Test
console.log(add_once(3,4));
console.log(add_once(4,4));
console.log(add_once(3,7));
console.log(add_once(2,10));//throw
*/

function counterF(x) {
  var counter = x;
  function inc() {
    counter++;
  }
  function dec() {
    counter--;
  }
  function getCount() {
    console.log(counter);
  }
  return {
    inc: inc,
    dec: dec,
    getCount: getCount
  }
}
var nCount = new counterF(10);
nCount.inc();
nCount.getCount();

function counterF(x) {
  return { //creates a closure over x argument
    inc: function() {
      return ++x;
    },
    dec: function() {
      return --x;
    },
    getCount: function() {
      return x;
    }
  };
}
var xCount = counterF(5);
/* Test
xCount.inc();
console.log(xCount.getCount()); //6
xCount.dec();
console.log(xCount.getCount()); //5
*/

function revocable(alert) {
  revoked = false;
  return {
    invoke: function(x) {
      if (!revoked) {
        alert(x);
      } else {
        throw Error(alert + " is revoked.");
      }
    },
    revoke: function() {
      revoked = true;
    }
  };
}
var temp = revocable(alert);
temp.invoke("hi");
temp.revoke();
temp.invoke("bye");//throw
