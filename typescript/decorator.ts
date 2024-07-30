function decorator(target: any) {
  class Extended extends target {
    addedProperty: string;
    constructor() {
       super();
       this.addedProperty = 'Something'
    }
  }
  return Extended;
}

@decorator // ete parameter e petk grum enk @decorator('Anything')
class Decorated {

}

const decorated = new Decorated();
console.log('decorated', decorated)

//Decorator-nery karan ashxaten classneri vra, parametreri, classi propertineri, methodneri