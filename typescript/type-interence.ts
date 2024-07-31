// Type inference en erevuytn e erb vor lezvum yndhanrapes haskanaum e inch type-i aranc mer manramasn bacatrleu
// lav ashxatum e primitive typeri hamar. ete popoxakan enk haytararum u assign enk anum, el petk chi grel inch type-i e, haskanum e

let variable = 6  // let variable: number = 6 aranc sra el inky giti vor variable number e

//Objecti interfacen el e karoghanum infer ani, bayc ete nor prop uzenas avelacnel kasi che ed prop chka

let objs = {
    firstName: 'Armen',
    lastName: 'Vardanyan'
}
objs.age = 25 // kasi estegh error age chuni, dra hamar kam petka objecti mej tank age: null, bayc aveli lav lutsumy haytarael interface kam class u grenk 
interface PersonS {
    firstName: string;
    lastName: string;
    age?: number
}

//Generici typen el e infer anum, tegher ka petk e zguysh linel
class Generic<T> {
    property: T;

    constructor(property: T) {
        this.property = property
    }
}

const generic = new Generic(5) // estegh haskanum e vor number e, constructorum bacatrum enk
//Subject, BehaviorSubject vor steghtsum enk talis enk true, inky haskanum e vor boolean e
const generi1c = new Generic({firstName: 'Armen', lastName: 'Vardanyan', age: 25}) // estegh chi haskanum vor Person e, objecti depkum el petk e tal vor inky orinak Person e

// tuple fixvats arraty e, konkret kanaki konkret arjeknerov
const conrdinates2D = [1,7] as const; //avelacnum es as const darnum e fixvats array
conrdinates2D.push() // asum e readonly e el ches kara avelacnes

type Coordinates2D  = Readonly<[number, number]>;
const conrdinates2DD: Coordinates2D = [1,6]