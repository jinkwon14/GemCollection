var Person = function(name) {
  this.name = name;
  // "this" is what invokes the class
};

Person.prototype.display = function(greeting){
  console.log(greeting + " " + this.name);
};

var new_person = new Person("Jin");
new_person.name; //Jin
new_person.display("Good evening"); //Good evening Jin

//enumeration data type
// eg. to define what stage the player is in
