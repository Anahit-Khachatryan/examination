// Symboly avelacel e Ecmascript6-ic sksats, primitive data type e. Erb symbol enk steghtsum ira arjeky private e. ete jnjenk noric steghtsenk chi lini en nuyn symboly

const symbol = Symbol();
const symbol1 = Symbol();
// console.log(symbol === symbol1) //false nshanakum e Symboly unique e, karank iran parameter poxancenk

const namedSymbol = Symbol('name of the symbol');
const namedSymbol2 = Symbol('name of the symbol');

// console.log(namedSymbol === namedSymbol2); //meka tarber en, anuny yndameny mer hamar e vor haskanank vor mekn er

const objWithSymbol = {
    [namedSymbol]: 7,
    x: 6
}

// ete orinak key arjeky erkar e, orinaky nerkevum anum enk espes
const key = "name of the key"
const obj4 = {
    [key]: 'value',
    'name of the key2': 'value' // sra poxaren grum enk arajini nman
}

//Symbolnerov nshanakvats key-ery enumerated chen - vor for of ov pttvenk ed key chen ereva

for(let key in objWithSymbol) {
    console.log('key', key)
}
//Object.key(objWithSymbol) ev chi linum
//Sa en tarberakn e vor hnaravor e stanal symbolner
console.log(Object.getOwnPropertySymbols(objWithSymbol))
const uniqueSymbol: unique symbol = Symbol() // karas menak constov steghtses

class WithUniqueSymbol {
    static readonly symbol: unique symbol = Symbol(); // menak readonly-ov karank ogragortenk u static lini(kani vor mi hat e, vor constructorov ashxateluc amen angam tarber chsteghtsi)
}
//Injection token-i takic symbol e ashxatum - DI-um constructorum vor inject es anum
//entadrenk unenk 2 object uzum enk merge anenk bayc ka nuyn anunov property-ner kan
//kam avelacnum enk prop vory chi uzum overwrite anenk

//Symbol ogtagortsvum e PI-i angularum. Injection token Symbol wrapper e
//Symbol steghvum e Symbol() kam Symbol.for()
