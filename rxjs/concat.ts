//Concat-y - concatenaction e anum observablener. stanum e mi kani observable, arajini arjeknery ugharkum e minchev complete eghav, heto ugharkum e erkrordiny, ete erkrordy emit arec arajini jamanak ed emit chi anum, ed korcnum enk

//karank arrayner kpcnenk, from anenk concat tank nuyn gortsoghutyunner anenk toArray heto anenk
//tarber socketneri lsenk, asenk meky verjana myusin lsi

import { concat, from, reduce, toArray} from 'rxjs'
const array1 = [1,2,3,4,5];
const array2 = [66,67,68,69]; // sync-i depkum data ches korcnum

concat(from(array1), from(array2)).pipe(
    reduce((acc, next) => acc + next, 0)
).subscribe(console.log)


concat(from(array1), from(array2)).pipe(toArray()).subscribe(console.log)

