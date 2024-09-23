//harcer
//1. Directive shat, host element, vonc e haskanum vor elementi vra dni
//2. writable, emunarable - 
//3. Cookies, localStorage, SessionStorage - datan vortegh pahel
//4. Security 
//5. buildi jamanak inchi e filey heshavorum
//6. hostDirectives,
//7. control value accessor










class Stack<T> {
  private items: T[] = [];

  get isEmpty() {
    return this.items.length === 0
  }

  get size() {
    return this.items.length;
  }

  push(item: T) {
    this.items.push(item)
  }

  top() {
    return this.items[this.size - 1];
  }

  pop() {
    return this.items.pop()
  }


}

const numbers = new Stack<number>();
numbers.push(5);
numbers.push(4);
numbers.push(1);
// console.log(numbers.pop())
// console.log(numbers.top())

class Queue<T> {
    private items: T[] = [];

    get isEmpty() {
      return this.items.length === 0;
    }

    get size() {
        return this.items.length;
    }

    get head() {
        return this.items[this.size - 1]
    }

    get tail() {
        return this.items[0]
    }

    enqueue(item: T) {
        this.items.unshift(item);
    }

    dequeue() {
        return this.items.pop();
    }
}

const queue = new Queue<string>();
queue.enqueue('First')
queue.enqueue('Second')
queue.enqueue('Last')

// while(!queue.isEmpty) {
//     console.log(queue.dequeue())
// }



// Set

const set = new Set<number>(); //Generic e
set.add(3);
set.add(4);
set.add(4);
console.log(set.size)
console.log(set.has(4))
set.delete(4)
console.log(set.has(4))
set.clear()

//remove duplicates from array
let array = [1,2,2,4,5,6,6]
array = Array.from(new Set(array))
console.log(array)

const objectSet = new Set<object>();
objectSet.add({a: 6});
objectSet.add({a: 6});
console.log(objectSet.size)


//Map - keyn karogh e linel cankacats ban

const map = new Map<string, number>() // Generic e
map.set('key', 5)
console.log(map.has('key'));
map.set('key2', 7);
console.log(map.size);
map.delete('key2');
console.log(map.has('key2'))

const strangeMap = new Map<object, number>();
const keyObject = {a: 7};
strangeMap.set(keyObject, 0);
console.log(strangeMap.get(keyObject))

for(const pair of strangeMap.entries()) { //strangeMap.entries iterationer anelu hamar
    console.log(pair)
}

for(const key of map.keys()) { //kveradardzni iterator ira keyeri
    console.log('key', key)
}

// User case - orinak typescriptum kamayakan stringneri hamapatasxanutyan mej e drvats 
// inch vor ban function, object, ... u type dra chgitenk kara lini. karank ogtagortsenk object bayc de aydkan sirun
// motecum chi, map-y henc dra dem e ughvats, (orinak angularum paramMap vor vercnum enk, url hamapatasxan parametreri
// anunnerov Map e sarkum ugharkum mez)
// e talis)

// WeakMap - 
// 1. keys must be objects 
// 2.Weak references to keys, meaning they do not prevent garbage collection of the keys. If there are no other references to an object used as a key, it can be garbage collected.
// 3. Iteration: Not iterable

// WeakSet:
// 1. unique objects
// 2.Weak references to values, meaning they do not prevent garbage collection of the values. If there are no other references to an object used as a value, it can be garbage collected.
// 3.Not iterable

// nuyn map-n u set-n a, i tarberutyun
// weakMap-y key-ery partadir petq a object linen isk erb key-n jnjvum a garbage collector-y 
// et sarqac objecty tanum a, sovorakan map-i depqum cher tanum
// ibr weak reference-ner a pahum i tarberutyun iranc sovorakan tesakneric
// mekel weak-eri vra iteracia ches kara anes i tarberutyun sovorakanneri, es nor nayeci moracel ei

// JavaScript Symbols are a new type of primitive data type 
// Symbols are unique and immutable, so they can be used as unique identifiers in objects and classes.
// Symbols can be used to create private properties and methods in classes.
// Symbols are useful for creating constants that can be shared across different parts of your code.
// https://playcode.io/javascript/symbols
