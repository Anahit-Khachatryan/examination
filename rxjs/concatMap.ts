// ConcatMap vercnum e observablner - spasum e meky verjana lriv nor hajordy ashxatacni, u ete meky complete chlini streamn el complete chi lini

import { concatMap, of, interval, timer, switchMap } from 'rxjs'

const numbers$ = of(1,2,3,4)

interval(1_000).pipe(
  concatMap(() => numbers$) // ete estegh liner http call orinak SwitchMap-i depkum ete nor arjek ekav hiny ignore e linum, norina subscribe linum. isk es depkum hakaraky norna ignore arvelu vorovhetev naxordy der complete chi eghel  
).subscribe(console.log)

interval(1_000).pipe(
    concatMap(() => timer(5_000))
).subscribe(console.log)

interval(1_000).pipe(
    switchMap(() => timer(5_000))
).subscribe(console.log) // sra depkum chi linelu Das 6-i meja

//switchMap hiny shprtum e den
//mergeMap iranc kani miajamanak
// ete uzum enk bolory linen bayc hertov concatMap enk ogtagortsum
//concatMapy vonc vor switchMap-i hakaraky lini