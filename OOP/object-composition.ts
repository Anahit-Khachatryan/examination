

interface MovingObject {
    location: Location1;
    move(x: number, y: number): void;
}

class Vehicle3 implements MovingObject{
    // location: {x: number, y: number} = {x: 0, y: 0}
    //locationi poxaren el grum enk ayspes
    location = new Location1(0,0);
    gaz!: number;

    // move(x: number, y: number) {
    //    this.location = {x, y};
    //    this.gaz--;
    // } // move methody hanum enk esteghic
    move(x: number, y: number) {
        this.location.move(x, y);
        this.gaz--
    }
}


class Animal2 implements MovingObject  {
    // location: {x: number, y: number} = {x: 0, y: 0}

    // move(x: number, y: number) {
    //    this.location = {x, y};
    // }
    //estegh xndira extends move er kani vor extend areci bayc orinak uni gaz vehicle , u lriv logikan xarnvuma u gnalov ay xndiry kara tsanrana - inheritance is a relationship ay es skzbunky xarnecink
    location = new Location1(0,0);

    move(x: number, y: number) {
        this.location.move(x, y);
    }
}

// lutsenk ays xndiry
class Location1 {
    address?: Address;

    constructor(public x: number, public y: number) {

    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y
    } 
}

class Address {}

let an = new Vehicle3()
console.log('an', an)



// Object composition tuyl e talis shat xndirner aveli lav dzevov lutsel
//objectnery karan unenan urish objectner(nested objectner)
// erb complex objectnery nerkyacnum enk pokr objectnery irar het miacnelov kochvum e object composition - aysinkn nested objectner eink irar mej nest anum
// object composition has a relationship - uni inch vor hatkutyun
// erb haskanum es orinak inheritance chi ashxatum, uremn himanakanum object composition petka ogtagortses
//wrapper - mi baniv tsatkum enk vor takic chereva, composedin edpes en asum
//functiony share anelu hamar inheritance chenk ogtagortsum ayl ogtagortsum enk object composition
