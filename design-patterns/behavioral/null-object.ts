
abstract class Engine {
  started = false;
  start() {
    this.started = true;
    console.log('started')
  }

  stop() {
    this.started = false;
    console.log('stopped');
  }
}

class CarEngine extends Engine {

}

class MotorcycleEngine extends Engine {

}

class EmptyEngine implements Engine {
    started = false;
    stop() {
      console.warn('this is an empty engine')
    }
    start() {
        console.warn('this is an empty engine')
    }
}

abstract class Vehicle {
    engine: Engine = new EmptyEngine();
}


class Car extends Vehicle { 
  move() {
    // if(this.engine){} // kareli e estegh ifov grel anel, bayc lav lutsum chi vorovhetev karas shat tegher ed checking petk lini
    // dra poxaren avelacnum enk EmptyEngine Class u Vehicle-i mej  grum enk engine = new EmptyEngine()
    this.engine.start();
    //logic
    this.engine.stop();
  }
}

const car = new Car();
console.log(car.move()); // sa undefinedi vra error kta, sa kareli e grel ete car.engine ka nor kanchi, bayc anyndhat edpes grely lav chi

// ete  unenk null inch dzev petka pahi applicationy
// sa en depkna vor null depky normala orinak listy datarka, vor anyndhat chgrenk if checkingner espes enk anum