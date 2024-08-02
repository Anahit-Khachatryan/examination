// Repeat- y henc complete e linum ed jamanaka sksum noric krknel // talis enk tiv te kani angam krkni
//Retry error-ic heto e krknum

import { of, repeat, retry, tap, repeatWhen, interval} from 'rxjs'

const numbers$ = of(1,2,3,4,5)

numbers$.pipe(
    repeat(2)
).subscribe(console.log)

numbers$.pipe(
    // tap(() => { throw new Error('Something went wrong'); }),
    retry(3)
).subscribe(console.log)


//Repeat when ogtagortsum e urish observable, spasum e ed obs emit ani vor inky krkninumbers$.pipe(
 numbers$.pipe(
  repeatWhen(() => interval(1_000)),
).subscribe(console.log)

numbers$.pipe(
    repeat({
        delay: () => interval(1_000)
    })
).subscribe(console.log)