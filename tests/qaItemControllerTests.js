// todo replace with a unit test framework

var c = require('../qaItemController.js');

c.qaItemCreate({});
c.qaItemCreate({});
c.qaItemCreate({});

console.log('\nexpect three items');
console.log( c.getAll());

console.log('\ndeleting one, two should be left ');
c.deleteQA(2);
console.log(c.getAll());


console.log('\nattempting to delete none-existing id, nothing should change');
c.deleteQA(5);
console.log(c.getAll());

console.log('\nupdated element with id 1');
c.updateQA({id:1, question:"what?", answer:"nothing"});
console.log(c.getAll());
