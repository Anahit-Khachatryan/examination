export interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

class ArrayIterator<T> implements Iterator<T> {
    private index = 0;
    private items: T[];

    constructor(items: T[]) {
        this.items = items
    }

    next(): T | null {
        console.log('this.index', this.index)
        if (this.index < this.items.length) {
            return this.items[this.index++]
        }
        return null
    }

    hasNext(): boolean {
        return this.index < this.items.length
    }
}
const items = [1, "devsage", false, 1.24];
const iterator = new ArrayIterator(items);
console.log(iterator.next())
console.log(iterator.next())

console.log(iterator.hasNext())

while (iterator.hasNext()) {
    const item = iterator.next();
    console.log(item);
}


//տվյալների հավաքածու ունենք, ուզում ենք գործողություն անենք որոշների հետ։ Երբ ուզում ես collectioneri ` tree, graphs բան սրանց վրա գործողություն անելwu
// rule e talis vonc traverse anel vorosh collectioni vra