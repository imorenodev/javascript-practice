//Introduction to Monads with Douglas Crockford's
//course - Javascript The Good Parts

function MONAD() {
  return function unit(value) {
    var monad = Object.create(null);
    monad.bind = function (func) {
      return func(value);
    };
    return monad;
  };
}
var unit = MONAD();
var monad = unit("Hello World!");
monad.bind(alert);
//unit(value).bind(f) ==is equal to== f(value)
