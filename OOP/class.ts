class Animal {
    name: string; // sa grum enk typescriptio  hamar vor nkaragrenk
    constructor(name: string) {
        this.name = name
    }

    move() {

    }


}

class Dog extends Animal {
    bark() {};
}

class Cat extends Animal {
    meow() {}
}

class Vehicle1 {
    model: string;
    constructor(model: string) {
        this.model = model;
    }

    move() {
        //logic
    }
}

class Car1 extends Vehicle1 {
   // multiple inheritance chka meky nra hamar vor 2 teghum kara lini orinak move function, vory chgites vorna kanchelu
   // bayc prototyperov karas object.create stanas multiple inheritance Object.create({...User.prototype, ...otherConstructor.prototype,})
}



// classnery karogh enk generacnel

const x = class {
    constructor(){}
} //first class citizena

// sxema e te inchpes en objectnery steghtsvelu
// uni miayn methodner
// propertynery constructorum enk assign anum
//class karnk extend anenk u linuma mi classic anel


//OOP concepts
//inheritance - 
//polymorphism - kaxvats te vor methodn e ashxatelu based on calling object type, sa nshanakum e karank unenank
// function vor this e ogtagortsum, karank kanchenk call-ov, tank tarber objectner iraric tarber, inky kashxati
//sa polymorphismi orinak e javascriptum. Urish lezunerum karank grenk nuyn anunov 2 function, meky orinak 2 parametrov, myusy 3, kaxvats te kani argumentov es kanchel kkanchi hamapatasxan function
//encapsulation - objecti state u behaviory mi tegh enk pahum, unenum enk orinak class vor amboxj behavioury nuyn tegh enk pahum. Ete mi logic kap uni e concepti het grum enk ed classi mej


//OOP use cases