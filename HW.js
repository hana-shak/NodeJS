//ex1
//let x;

//ex2
var y = 10;

//ex3
var a, b, c;

//ex4
var a = "Batool"; b = "hana"; c = "ala";
// console.log(a,b,c);

//ex5
var z = true; w = false; r = true;
// console.log(z,w,r);

//ex6
const q = "Batool is here";
// console.log(q);

//ex7
fruit = [];
//console.log(fruit);

//ex8
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numbers);

//ex9
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// console.log(letters);

//ex10
Obj = { a: 11, b: 12, c: 13 };
//console.log(Obj);

//ex11
Obj = { a: "batool", b: "hana", c: "ala" };
// console.log(Obj);

Obj = { a:true,  b:false , c:true };
// console.log(Obj);

Obj = { a:[1,2,3],  b:[4,8] , c:["lolo","soso"] };
// console.log(Obj);
// console.log(Obj.a[0]);

Obj = { a: { x: "1", y: "2", z: "3" },
        b: {x: "4", c: "8" } ,
    c: { s: "lolo", q: "soso" }};
// console.log(Obj);
// console.log(Obj.a.x);


Obj = {
    a: "Batool",
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    z : true,
    r : 4,
    c: { x: "1", y: "2", z: "3" },
        //  b: {x: "4", c: "8" } ,
        //  c: { s: "lolo", q: "soso" }
};

//  console.log(Obj);

arr = [c = { x: "1", y: "2", z: "3" }, d= { s: "lolo", q: "soso" }];
// console.log(arr);
// console.log(arr);
// console.log(arr[0].x);

// array of objects, and each objects is an object of objects that has an array, this array will have at least one object
//NOT SOLVED, b is object of 
adarr = [
    c = { a:{ s: "lolo", q: "soso" } ,b:{ b: [] , f:"s" } } ,
    d= { s: "lolo", q: "soso" }
    
];
//console.log(adarr);

//ex18+20
function sum(x, y) {
    y = 7 + 3;
    z = x + y;
    return z;
    return y;
};
// console.log(sum(4,4));

//19+21
function mul(x, y) {
    r = 4 * 4;
    z = x * y;
    return z;
    // return r;
};
// console.log(mul(9,4));


//ex
var http = require('http');
var  fs = require('fs');

http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('try.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
  
// const sth = require('./try.html');
  