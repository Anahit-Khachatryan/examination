//Take /TakeWhile / takeUntil - irank observable-y dadarecnelu operatorner en

import { of, fromEvent, take, takeWhile, takeUntil } from "rxjs";

//Take - tiva stanum asum e ete eskan angam kez emission ekav complete eghi
//takeWhile - boolean paymana stanum, enkan jamanak e ashxatum kani der paymany jisht e
//takeUntil - vercnum e urish observable, spasum e observable tekuz mi angam emit ani, ed observable complete e linum. Angularum senc enk anum - grum enk ngOnDestroy subject, ngOnDestroy-um next enk anum, arden observable-y complete en linum



const clicks$ = fromEvent(document, 'click');
const numbers$ = of(3,4,5)

clicks$.pipe(
    take(1)
).subscribe(console.log) //1 clickic heto kverjana

//Karank ogtagortsenk slice -i hamar

clicks$.pipe(
    takeUntil(fromEvent(document, 'contextmenu'))
).subscribe(console.log) //clickery enkan e lselu kani der aj click chi arel

numbers$.pipe(
    takeWhile(n => n < 4)
).subscribe(console.log)
//filteri tarberutyuny takeWhile-ic ete orinak 4-ic heto unenank 3, ed 3 ktpi, isk takeWhile-i depkum chi tpi - kangnecnum enk

