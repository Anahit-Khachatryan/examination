//Symbol uni static iterator vory tuyl e talis objecti vra implementel generator function, vory kveradardzni ed objeti vra gtnvogh arjekner

const list11 = {
    0: 'Hello',
    1: ',',
    2: 'world',
    *[Symbol.iterator]() {
        yield this[0];
        yield this[1];
        yield this[2]
    }
}

// of pttvum e itemneri vrayov in keyeri vrayov. Array-ov of builtin karam tam anem, bayc objecty chuni Symbel.iterator method, 
for (const item of list11) { 
    console.log(item)
}

//voronk array chen bayc uzum enk itemneri hamar pttvel cankacats objecti vra implementum enk Symbol.iterator 