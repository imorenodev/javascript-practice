// Four types of this binding
/*
 - Implicit Binding
 - Explicit Binding
 - new Binding
 - window Binding
*/

// Implicit Binding
// Look at when the function was invoked, and look to the Left of
// the Dot at Call Time to figure out what 'this' is referring to.

var sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name);
  };
};

var me = {
  name: 'ian',
  age: 28
};
var you = {
  name: 'joe',
  age: 40
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // "ian"
you.sayName(); // "joe"

/* Example 2 */

var Person = function(name, age){
  return {
    name: name,
    age: age,
    sayName: function(){
      console.log(this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function(){
        console.log(this.name);
      }
    }
  };
};

var jim = Person('Jim', 42);
jim.sayName(); // "Jim"
jim.mother.sayName(); // "Stacey"


///////////////////////////////////////
// Explicit Binding
// call, apply, bind

var sayName = function(lang1, lang2, lang3){
  if (arguments.length <= 1) console.log('My name is ' + this.name);
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ", " + lang2 + ", and " + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

// .call will explicity invoke the function on the stacey object
sayName.call(stacey); // "My name is Stacey"
// the first argument passed to call sets the context for 'this', and
// additional arguments passed in are used as normal arguments
sayName.call(stacey, languages[0], languages[1], languages[2]); // "My name is Stacey and I know Javascript, Ruby, and Python"

// .apply is same as .call but takes an array and parses the arguments.
sayName.apply(stacey, languages); // "My name is Stacey and I know Javascript, Ruby, and Python"

// .bind is similar to .call but instead of immediately invoking the function
// it will return a brand new function that you can invoke later.
var newF = sayName.bind(stacey, languages[0], languages[1], languages[2]);


///////////////////////////////////////
// new Binding

// javascript creates a brand new object fo rus and saves it as {}
var Animal = function(color, name, type){
  // this = {};
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window binding
var sayAge = function(){
  console.log(this.age);
};

var me = {
  age: 25
};

sayAge(); // looks for window.age -> undefined
window.age = 35;
sayAge(); // 35
