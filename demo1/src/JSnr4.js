//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
    try{
        return n1 +n2;
        throw new Error('Whoops haha!')
    } catch(e) {
        console.error(e.name + ': ' + e.message + 'whiops!')
    }
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
}

function mul(n1, n2){
    try{
        return n1 * n2;
        throw new Error('Whoops haha!')
    } catch(e) {
        console.error(e.name + ': ' + e.message + 'whiops!')
    }
};

function div(n1, n2){
    try{
        return n2 / n1;
        throw new Error('Whoops haha!')
    } catch(e) {
        console.error(e.name + ': ' + e.message + 'whiops!')
    }
};

//Callback example
var cb = function(n1,n2, callback){
    try{
  return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
    throw new Error('Whoopsie doopsie! We did a fucky-wucky UwU')
    } catch(e){
        console.error(e.name + ': ' + e.message+ ' so no, it no work bro')
    }
};

console.log( add(1,2) )     // What will this print?
//It prints 3, adding the two numbers

console.log( add )          // What will it print and what does add represent?
// It prints the that it is a function, 

console.log( add(1,2,3) ) ; // What will it print
// Same as the first, but ignores the 3 because it is set to 2 values, and it takes 2 values only and ignores the third value.

console.log( add(1) );	  // What will it print 	
//It shows NaN because it needs two parameters, and has only 1, so it says 1 + non defined, which equals to NaN

console.log( cb(3,3,add) ); // What will it print
// It adds the numbers

console.log( cb(4,3,sub) ); // What will it print
// It subtracs the second away from the first

console.log(cb(3,3,add())); // What will it print (and what was the problem)
//A fucka-big error

console.log(cb(3,"hh",add));// What will it print
//It makes the 3 to a string together with hh, 3hh string.
console.log(cb(3,5,mul));
console.log(cb(6,34,div));