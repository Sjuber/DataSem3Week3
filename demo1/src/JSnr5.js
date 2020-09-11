var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Kristian", "David", "Niels", "Ib"];
names.forEach(element => console.log(element));
var ul = "<ul>";
//console.log(names);
var nam3s = names.filter(word => word.length <= 3);
nam3s.forEach(element => console.log(element));
//console.log(nam3s);

var NAM3S = nam3s.map(function(word) {return word.toUpperCase() });
console.log(NAM3S);

var N3 = nam3s.map(function(word) {return "<li>" + word + "</li>"})
console.log(ul + N3 + ul);
console.log(ul + N3.toString() + ul);