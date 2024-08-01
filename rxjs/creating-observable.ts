// of / from / fromEvent /timer /interval /EMPTY /iif

//Te inchpes steghtsel stream - Observable create anel
//Tarber tesaki datatyperic karank sarkenk stream - Arrat-ic, promise-ic, event-ic, error-ic ...

//of - sovorakan datayic sarkats stream - nuyn hertakanutyamb talu e heto complete e linum
//sync e ashxatum, karank operatorneri mijocov sarkel asynchron
//typesafe e

import { catchError, of, tap, from, fromEvent, timer, interval, zip, throwError, EMPTY, iif} from 'rxjs'

const obs$ = of(1,2,3, true)

obs$.subscribe(console.log) //type infer e anum

//ogtakar e ete unenk stream uzum enk error handle anenk, Erb error eghav mtnum e catchError callback u veradardzvogh observable darnum e mer sourcce observable-y
obs$.pipe(
    tap(()=> {
        throw new Error('qyabab');
    }),
    catchError(error => of(`Error ${error} happened`) ) // talis enk callback vory petk e veradardzni urish obsevable.
).subscribe(console.log)


//from - array-ic data stanalu hamar. of -ov ete anenk arrat kstanank. nayev Promise-ic

from([1,2,3]).subscribe(console.log)

const promise = Promise.resolve(5);
const fromPromise = from(promise);

fromPromise.subscribe(data => console.log(data)); // Promise-i then ashxatum e ugharkum e datan 


//fromEvent - browseri eventneri hamar, 2 argumen e stanum, async e ashxatum
fromEvent(document, 'click').subscribe(event => {
    console.log(event);
})

// fromEvent(document, 'myEvent').subscribe(console.log);
setTimeout(() => {
    document.dispatchEvent(new CustomEvent('myEvent'))  // sa el custom eventi depkum
},1000)


//Time-Based - inervals, timers - sranc mijocov karank asenk eskan varkyan yndmijumnerov ashxati ev ayln, cancelable chen misht emit en anelu ete chogtagortsenk takeUntil ban

timer(3_000, 1_000).subscribe(console.log) //mi argumentov setTimeout-ov e . sa harmar e erb uzum enk interval anel bayc inch vor jamanak heto
interval(2_000).subscribe(console.log) // inch vor tsanr gortsoghutyun enk uzum anel, bayc datan arag-araga poxvum, menk tsanr gortsoghutyuny anyndhat anelov tsanranuma, asum enk es inch intervalov ara

const interval$ = interval(1_000);
// zip(interval$, interval(2_000).subscribe(console.log)) //mots errorov e heto nayel

//Error - inky data chi ugharkum , error e teghi unenum

throwError('Error').subscribe({
    error(error) {
        console.log(error)
    }
}) // inch vor conditioni jamanak uzum enk error kci, karank switchMap anenk u throwError anel



//Empty
EMPTY.subscribe({
    complete() {
        console.log('completed')
    }
})


//iif - 2 observable enk talis u mi hat function vory payman e vercnum ete eghav arajin e anum, ete che erkrordy
const x = true;
iif(
    () => x,
    obs$,
    interval$,
).subscribe(console.log) // kani vor true e kani obs$

//
const custom$ = new Observable(observer => {
    let count = 0;
    const intervalId = setInterval(() => observer.next(count++), 1_000);
    setTimeout(() => {
        clearInterval(intervalId); //
        observer.complete();
    }, 7_000);
});

custom$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('Completed')
});


