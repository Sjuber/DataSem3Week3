var boys = ["Griff", "peter", "Ole"];
var girls = ["Denise", "ice crystal", "Janne"];

var bNg = boys.concat(girls);

console.log(bNg);

console.log(bNg.push("Lone","Gitte"));
console.log(bNg.unshift("hans","Kurt"));
console.log(bNg.toString());

console.log(bNg.shift());
console.log(bNg.pop());

console.log(bNg.toString());

console.log(bNg.splice(3,1));
console.log(bNg.toString());
console.log(bNg.splice(5,1));

console.log(bNg.toString());

console.log(bNg.reverse());

console.log(bNg.toString());

console.log(bNg.sort());
console.log(bNg.toString());

var bNgU = bNg.map(function(tiems) {return tiems.toUpperCase() });
console.log(bNgU);

function hasLorl(value){
    if(value.substring(0,1) == 'L'){
          return value.substring(0,1) != 'L'}
    else
  return value.substring(0,1) != 'I'
  }
  
  function onlyLI(name){
          if(name.substring(0,1) === 'L' || name.substring(0,1) === 'I'){
          return name}
  }


//var bNgUl = bNgU.filter(hasLorl);
var bNgUl = bNgU.filter(onlyLI);
console.log(bNgUl);