//Partial tuyl e talis stanal nor type vori bolor keyery nullable en
function updateOrderInDatabase(order: Partial<Order>) {
 // save order to database
}

updateOrderInDatabase({address: 'Adress'}) // entadrenk chenk uzum poxancel bolory ayl inch vor meky
//typescripty tuyl e talis stanal nor type vori bolor keyery nullable en` Partial. Ordered mnuma e unchanged, bayc karank tank mi ktory


// mez petka kamayakan object , uzum em bacatrel inch proper karan linen inch typerov

type Dictionary = Record<string, any>; //2 parameter e keyery inch e linelu, valuen inch e linelu

const x9: Dictionary = {
    hello: 6
}


//Record - es es keyerov es es valuenerov

type Loading = Record<'customer' | 'address' | 'status', boolean>;

const loading: Loading = {
    customer: true,
    address: false,
    status: false
}

//Pick<T>
//vercnum e T type u t mijic keyer e vercnum u stanum e nor interface voronc mej ed key-ern en

interface Address {
  city: string;
  addressline?: string;
  zip: string
}

// stanank nor type city u addressLine-ov. Ogtakar e erb frontEnd-i u backendi typery tarber en
type justAddress = Pick<Address, 'city' | 'addressline'>
const addr: justAddress = {
    addressline: 'sdf',
    city: 'sdf',
}

// Omit<Text,K>
//sa el vercnum e T u keyer,  hanum e K-y

type justAddressWithOmit = Omit<Address, 'zip'>;
const addr1L: justAddressWithOmit = {
    addressline: 'sdf',
    city: 'sdf',
}

//Exclude<T,U> karank T-i mijic jnjenk vomank. Omity interface-i hamar e, sa type-i hamar
type Status1 = 'Offline' | 'Online' | 'In a Call' | 'Presenting'

//uzum em stanam ed statusnery vory zbaghvats e

type BusyStatus = Exclude<Status1, 'Online'>;

const z1: BusyStatus = 'In a Call' //Online-y hanec

//Extract 

type notBusy = Extract<Status1, 'Online'> // sa menak toghum e Online-y, asum e vercru en fieldery vor 2 teghn el kan.Pick-i nmana
const n: notBusy = 'Online'

//NonNullable - null arjek asum e petka chlini
type S = string | null | undefined
type NN = NonNullable<S>;
let k : NN = 'sd'


// Required = Partial-i hakarakn e sa vercnum e typery sarkum e nonNullable

type StrickAddess = Required<Address>
const sa: StrickAddess = {
   'city': 'A',
   'zip': 'sdf',
   'addressline': 's'
}

// Parameters<T> - vercnum e function veradardznum e parametreri typery. Sa ogtakar e ete grum enk mi hat function, vory stanum e array, destructer enk anum, argumentery talis inch vor functioni
//kam petka argumenty grenk dzerkov kam orinaky addTuple-ov berel em
//Parameters 2 typeri mijev kapy pahelu hamar e
function add(a: number, b: number) {

}

type Params = Parameters<typeof add>;
const p: Params = [1,2] // karank tank 2 argument u number typeri

function addTuple(tp: Parameters<typeof add>) { // tp: [number, number]bayc ete add poxenk number-y string chi ashxati. dra hamar poxum enk Parameterov
    return add(...tp)
}

addTuple([1,2])


//ConstructorParameters<T> - Parameters sa f-n er vercnum, constructor parametery veraberum e classin
class A {
    constructor(a: number, b: string) {

    }
}

type ParamsA = ConstructorParameters<typeof A>; // vercrecink classt ira constructori mejic hanecink parametereri typery
const paramsa: ParamsA = [6, 'string']

function creaateAInstance(...params: ConstructorParameters<typeof A>) {
    return new A(...params)
}

const instance = creaateAInstance(6,'a')

//ReturnType<T> - functioni veradardzvogh typen e veradardznum

function addR(a: number, b: number) {
    return a + b;
}

function log(info: ReturnType<typeof addR>) { // uzum enk addR ardyunky log ani
    console.log(info);
}

log(addR(4,5))

function f() {
    return 6 // entadrenk heto poxecir string
}
let nz: ReturnType<typeof f> = f(); 


//InstacneType - stanum e inch vor constructor, veradardznum e ir instance-i typey

class BI {
    name: string = ''
}

type BInstanceType = InstanceType<typeof BI>; // sa ashxatum e en cituacianerov erb chgitenk B inch e

//mi kanisn el el ban chem arel

// tuple fixvats arraty e, konkret kanaki konkret arjeknerov









