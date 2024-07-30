function* generator() {
    yield 1; // inky anum e yield u dadarum e, 2-rd angam kancheluc 2-rdy kkanchi u kddadari verjum ete chlini kta done: true
    yield 2;
    yield 3;
    yield 4;

}

const gen = generator(); 
const value1 = gen.next();
const value2 = gen.next();

console.log(value1)  //{value: 1, done: false}
console.log(value2)  //{value: 2, done: false}

const array1 = [1,2,3]

export function* logArray(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        yield array[i]
    }
}

let al = logArray(array1);
document.addEventListener('click', () => console.log(al.next().value))


