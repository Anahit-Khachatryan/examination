//Srank take-i hakarakn en , baca toghum inch vor emitionner
//skip baca toghnum inch vor kanaki emition nor mnacats talis e
//skipWhile - payman e stanum, kani der true e skip e anum - linum e orinak kani inch vor ban chi eghel ignore anel, minchev inch vor event eghav
//skipLast - bac e toghum verjin tvats kanaki elementnery
//skipUntil - baca toghum kani inch vor observable signal chi ugharkel

import { of, fromEvent, skip, skipWhile, skipLast, skipUntil } from "rxjs";


// const click$ = fromEvent(document, "click");
const numbers$ = of(1,2,3,4,5);

// click$.pipe(
//     skip(5)
// ).subscribe(console.log)

numbers$.pipe(
    skipWhile(n => n < 3)
).subscribe(console.log)

numbers$.pipe(
    skipLast(4)
).subscribe(console.log) //edkan hat skip e anum, heto sksum e ugharkel
//bayc ete orinak clickeri vra grenk skipLast(5) - spasum e 5 hatic avel anes heto nor dimacinery ugharkum e