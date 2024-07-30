class StoreT<T, M> { //T-i teghy inch tar uzenk karank dnenk
  items: Array<T> = [];   // Array<string> kam string[] - sa aveli naxyntreli e
  otherItems: M[] = [];

}


const store1 = new StoreT<number, boolean>();
store1.items = [1] // itemnery chgitenk inch tipi en linelu, ogtagortsoghy arden kbacatri inch type-i e linelu
store1.otherItems = [true]

function deepClone<T extends object>(obj: T): T {  // ete stana object kveradardzni nuyn type-i objectic
    //implementation
    return {x: 7} as T
}

const obj9 = deepClone({x: 7}) // T extends object-ov asum enk petk e object lini ches kara estegh gres string

interface Person7<T extends object> {
    fullName: string;
    vehicle: T
}

class Vehicle9 {

}

class Car9 extends Vehicle9 {
  engine: string = '';
}

class Bicyle9 extends Vehicle9 {

}

const person9: Person7<Car9> = {
    fullName: '',
    vehicle: new Car9()
}

// haytararel typer
type numbers = Array<number>;
const arr9: numbers = [1,2,3]

type example<T> =  {
    item: T[]
}

const ex1: example<number> = {
    item: [1]
}

class User20 {
  isAdmin: boolean = false;
}

class Order {
    customer: User20;
    address: string = ''
    status: 'Pending' | 'Delivered' | 'Cancelled'
    constructor(customer: User20, status: 'Pending' | 'Delivered' | 'Cancelled') {
        this.customer = customer;
        this.status = status;
    }
}

enum OrderStatus {
Delivered ='Delivered',
Pending = 'Pending'
} 

function saveToDatabase(entity: Order | User20) {
    //implementation
}

// saveToDatabase(new User20('Name', new Car()))



type Mixed = Order & User20;
let x1: Mixed

type Intersected = Order | User20
let x2: Intersected

function toUtC(date: string | Date) {
    // date.toLocaleString  3 hat method e berum en inch 2-i depkum el ka, isk checkingi depkum arden stringi cankacats function
  if (typeof date === 'string') {
    // date.charAt(5) // aystegh karank
    new Date(date).toISOString();
  } else {
    date.toISOString();
  }
}







