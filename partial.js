const callFirst = (fn, fArg) => 
  function(...rest) {
    return fn.call(this,fArg, ...rest);
  }

const callLast = (fn, lArg) => 
  function(...rest) {
    return fn.call(this, ...rest, lArg);
  }


const greet = (me, you) => 
  console.log(`Hello ${you}, my name is ${me}`);


const ianSaysHello = callFirst(greet, 'ian');
const sayHelloToIan = callLast(greet, 'ian');

ianSaysHello('joe'); // 'Hello joe, my name is ian'
sayHelloToIan('joe'); // 'Hello ian, my name is joe'
