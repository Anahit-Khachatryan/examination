//SwitchMap-y projection e anum observable-y observable-i, da nshanakum e unes mi hat observable ir mej 
// map es anum voch te sovorakan arjeki ayl urish oservable-i 
//Orinak http call es anum u ed resulti himan vra nor call es anum,u vor call anes kstanas nor observable, 
//  bayc uzum es verjin subsribeum mijini resulty vercnes 
import { fromEvent, of, switchMap, map } from 'rxjs'


const numbers$ = of(5,6,7)
//uzum enk erb click enk anum browserum inch vor tegh ed bolor tvery log ani
fromEvent(document, 'click').pipe(
    switchMap((event) => numbers$.pipe(
        map(n => n * (event as MouseEvent).clientX),
    ))
).subscribe(console.log)

//kara ogtagortsvi orinak input es lracrel chpetka ugharkvi minchev en myus inputn el chlracvi

//switchMap-i depkum resubscribe e linum nori, en hiny cancel e linum. Orinak ete petka click es anum call gna mi hat el click anes naxkiny candel klini

