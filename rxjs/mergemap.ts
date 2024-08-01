//MergeMap - map e anum arjeknery inch vor observable urish observableneri bayc heto flatten e anum - aysinkn hanum e menk subscribe enk linum erkrord observablein
//MergeMap i tarberutyun SwitchMap-i naxord emissionery cancel chi anum. aysinkn ete switchMapenk ogtagortsum value ekav switch eghank 2-rd observable-i, heto noric arajinic arjek ekav, en mi haty vory vor subscribe em eghel naxordy cancel e linum, norn e ira teghy galis

import { of, mergeMap, timer, switchMap, fromEvent} from 'rxjs'

const numbers$ = of(1,2,3,4)
const numbers$2 = of(4,5,6,7)

numbers$.pipe(
    mergeMap(n => timer(1_000))
).subscribe(console.log)

// MergeMap-i depkum ktpi 4 hat 0, isk switchMap-i depkum 1 hat 0

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    mergeMap((e) => timer(1_000))

).subscribe(console.log)  // kani angam click anes enkan angam kta. isk switchMapi depkum ete shat click anes 1 haty klini
//Ete petka mez amen ekats emitioni paragayum inch vor gortsoghutyun anel petka ogtagortsel mergeMap
