$ = require("jquery");
    //Person = require("./modules/Person.js");
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + "now owes $0 in taxes.");
    }
}
  
var john = new Person("John", "Blue");
john.greet();

var smith = new Adult("Smith", "Yell");
smith.greet();
smith.payTaxes();