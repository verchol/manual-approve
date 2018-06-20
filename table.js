const {table} = require('table');
const _ = require('lodash');
// Using commonjs?
// const {table} = require('table');
const data1 = require(_.last(process.argv)||'./data.json');
console.log(data1);
let data = [],
    output;
 
_.forEach(data1, (v, k)=>{
  data.push(v);
})
console.log(process.argv);

 output = table(data);

console.log(output);
