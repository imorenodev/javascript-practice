const numOfArgs = function(){
  console.log(arguments['length']);
}

numOfArgs(); // 0
numOfArgs('one'); // 1
numOfArgs('one', 'two', 'three'); // 3

const numOfGlobalArgs = () => {
  Array.prototype.forEach.call(arguments, (arg) => console.log(arg))
}
numOfGlobalArgs();
