//Pairs/Pairwise - inky vercnum e mi hat observable-i mej angam arjek taluc pahum e naxord arjeky(history e pahum pokr, orinak undo functionali depkum)

import { pairwise, interval, take, pairs } from "rxjs";

const int1$ = interval(1_000).pipe(take(5))

int1$.pipe(
    pairwise()
).subscribe(console.log)

//pairs-y deprecated e