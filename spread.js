const printArgs = function(...args) {
  console.log(args.length); 
  let total = args.reduce(acc, curr => acc + curr);
  console.log('total: ' + total);
} 

printArgs(1, 2, 3);
