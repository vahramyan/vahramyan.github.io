"use strict"
class Animals {
    constructor(name) {
        this.name = name;
    }
    printName() {
        document.body.innerText += " " + this.name;

    }
}
class Dog extends Animals {
    
    constructor(name,sound ){
        super(name);
        this.sound = sound;
    }
    listenSound(){
        document.body.innerText += " " + this.sound;
    }
}

let dog = new Animals("Bobik");
let cat = new Animals("Murka");
dog.printName();
cat.printName();
let sembernar = new Dog("Bobikkkkk" , "hafhafhaf");
sembernar.listenSound();
sembernar.printName();