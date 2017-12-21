class Person { 
    constructor(fullName, favcolor) {
        this.name = fullName;
        this.color = favcolor;
    }

    
    greet() {
        console.log("Hi! My name is " + this.name + " and my favourite color is " + this.color + ".");
    }
}

export default Person;