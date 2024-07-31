// Erb gitenk inch type e, typescriptin bacatrenk kam kara inky haskana
function dosm(something: unknown) {
    if(Array.isArray(something)) {
        something.every(() => true);
    }
}

//kan iravijakner vor stugumy enpes bard e vor typescripty glxi chi ynknum inch type-i e

function isArray(maybeArray: unknown): maybeArray is Array<any> { //f-n stugum e vor maybeArray Array, 
    return Array.isArray(maybeArray);
}

let maybeAnArray: unknown
if (isArray(maybeAnArray)) {
    maybeAnArray.push(4)
}

function isNumber(maybeNumber: unknown): maybeNumber is number { // argumenti anun inch vor type
    return typeof maybeNumber === 'number'
}

if(isNumber(maybeAnArray)) {
    maybeAnArray.toFixed(1) 
}

const unknownObj: unknown = {
    firstName: 'name',
    lastName: 'name'
}

function mustBeNumber(maybeArray: unknown): asserts maybeArray is number { // ete ays function kanchvel e u error chi shprtvel uremn number e
    if(typeof maybeArray !== 'number') {
        throw new TypeError('Must be a number')
    }
}

mustBeNumber(maybeAnArray);
maybeAnArray.toFixed(2)


function receivesSomeObject(someObject: object) {  //someObject: Object inky hamarum e datark object e dra hamar grum enk pokratar
    someObject.hasOwnProperty('key');
   (someObject as Person).firstName
}



// uzum enk bacatrel vor elelemtny u array nuyn typei petk e linen
function appendToArray<T>(element: T, array: T[]) {
  array.push(element);
}

const arr7: number[] = [1,2,3];
const str = 'String'

// appendToArray(str, arr7);// erb poxecink T voch te unknown ashxatec

// observable-i depkum ete orinak filter enk anum, heto manrdanum enk vercnum enk 

class AC {
    propertyA!: number
}

class BC extends AC{
    propertyB!: number
}

// const observable$ = new Observable<A>();
// observable$.pipe(filter(e => e instanceof BC)).subscribe((value: BC) => value) //observable-i depkum depker kan vor korum e