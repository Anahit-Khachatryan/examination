//ToArray - inky valunery ekats havakum e observable-i mej ed arrayn e veradardznum
import { of, toArray, from, filter, map } from 'rxjs'

const numbers$ = of(1,2,3,7,8,9)

numbers$.pipe(
    toArray(),
).subscribe(console.log)

//sa harmar e backendic tvyal e ekel vory arrayi meja brnenk array sarkenk observable frank heto sarkenk eli array ugharkenk


//stanank array vory zuyg tveri karakusina mi operatorov anum enk
from([11,12,13, 14]).pipe(
   filter(n => n % 2 === 0),
   map( x => x **2),
   toArray()
).subscribe(console.log)