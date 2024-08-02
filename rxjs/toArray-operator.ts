//ToArray - inky valunery ekats havakum e observable-i mej ed arrayn e veradardznum
import { of, toArray, from, filter, map, fromEvent, switchMap } from 'rxjs'

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

//unenk button <button id='load'> Get All Countries </button>
//rest api vercnum e linsty
const loadBtn = document.querySelector('#load')
if (loadBtn) {
    fromEvent(loadBtn, 'click').pipe(
      switchMap(
        () => from(fetch('https://restcountries.com/v3.1/all').then(
        res => res.json()
      ))),
      switchMap((array: {name: object}[]) => array),
      map(country => country.name),
      toArray(), // es depkum voch mi ban chi beri, kani vor fromEventin e lsumn, isk ed anverja, inky petka stana bolor datan heto sarki dra hamar petk e grel taki orinaki nman
    ).subscribe(console.log)
}
    if (loadBtn) {
        fromEvent(loadBtn, 'click').pipe(
          switchMap(
            () => from(fetch('https://restcountries.com/v3.1/all').then(
            res => res.json()
          )).pipe(
            switchMap((array: {name: object}[]) => array), 
            map(country => country.name),
            toArray(),
          )),
        ).subscribe(console.log)
    }
    // switchMap-i teghy karank grenk nayev switchAll() - ughaki. SwitchAll asuma kez observablener en galu strami mej vercru iranc subscribe eghi, aranc inch vor map-ingi ban
    //switchMap aveli shat petka ete ekats arjekov inch vor ban voroshenk, map enk anum orinak http call enk anum, menak valuneri hamar ughaki switchAll enk anum