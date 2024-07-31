// Never Type nerkayacnum e valuener voronk erbek teghi chi unenalu
//Orinak functioni kam arrow f-i return type klini never, ete misht f-i kci exception, erbek ira ashxatanky chi verjacnum
//Ete combinacnum enk 2 type ori hatumy datark e, type klini never

type n =  true & false // type never e

function throws() {
    while(true) {
        throw new Error()

    }
}

const result = throws();

//unknown any nmana bayc type-safe e. Any-i nman ameninch karank assign anenk, bayc ete unknowna chenk kara assign anenk inch vor bani minchev chnshenk inch type e
//stipum e stugumnery dzerkov anel

let something: unknown = 6;
const yx: number = something as number // aystegh petka arden grenk konkret inch type -i e
function someLibraryFunction(): string {
    return Math.random() > 0.5 ? 6 : 'hello'
}

//libi mej grats funcion e chenk kara inch vor ban poxenk ughenk kgrenk espes

const zuz: number = someLibraryFunction() as unknown as number


