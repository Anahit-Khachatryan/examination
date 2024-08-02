import {fromEvent, Subject, map, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs'

const counter$ = new Subject<number>();

const btn = document.querySelector('#increment');
const completeBtn = document.querySelector('#complete');

let count = 1;

btn?.addEventListener('click', () => {
    counter$.next(count++)
})

completeBtn?.addEventListener('click', () => {
    counter$.complete();
})

counter$.subscribe(n => console.log('From First ${n}'))
counter$.subscribe(n => console.log('From Second ${n}'))
//stacvum e mi teghic karas data ugharkes, karas tarber hatvatsneric subscribe lines, heto next anes bolory stanan
//orinak componenty veracav, karank complete anenk vor mnacatsy izur spasen vor karogha data ugharki - ete observable complete e eghel el unsubscribe-i karik chka

//kara orinak en ov subscribe e eghel ed componentum gren next u ches uzum anes vor inch vor problemner chlini, dra hamar karank subjecty transform anenk u sarkenk sovorakan observable

const counterObs$ = counter$.asObservable(); // counteric stacvum e mi hat observable vorin linuma subscribe linel bayc next ches kara anes
counterObs$.subscribe(n => console.log('From First ${n}'))
counterObs$.subscribe(n => console.log('From Second ${n}'))

class Something {
    private _subject$ = new Subject<number>();

    get observable() {
        return this._subject$.asObservable();
    }
    emit() {
        this._subject$.next(689)
    }
}

const something = new Something();
something.observable.subscribe();

if (btn) {
    fromEvent(btn, 'click').
    pipe(
     map(() => count++)
    ).subscribe(counter$)   // sa nuyn e vor gres .subscribe({next(n) {counter$.next(n)}})
}


//Behavior Subject

const counteB$ = new BehaviorSubject(0);
if (btn) {
fromEvent(btn, 'click').pipe(
    map(() => {
        const current = counteB$.getValue();
        return current+1
    })
).subscribe(counteB$)
}

class Store<State> {
    private _store : BehaviorSubject<State>
    constructor(initialState : State) {
        this._store = new BehaviorSubject(initialState);
    }

    select<T>(projector: (currentState: State)=> T){
        return this._store.pipe(
            map(projector)
        )
    }

    setState(newState: State){
        this._store.next(newState)
    }

    getState() {
        return this._store.getValue();
    }
}

const store = new Store({count: 0})
if (btn) {
    fromEvent(btn, 'click').subscribe(() => {
        let {count} = store.getState();
        store.setState({count: ++count})
    })
}

store.select(state => state.count).subscribe(console.log)
const btnShow =  document.querySelector('#show');
if (btnShow) {
    fromEvent(btnShow, 'click').subscribe(() => console.log(store.getState()))
}

// ReplaySubject
const replay$ = new ReplaySubject<number>(5);
const btnBuffer = document.querySelector('buffer');

if (btn) {
    fromEvent(btn, 'click').subscribe(() => replay$.next(count++))
}
replay$.subscribe(console.log)
if (btnBuffer) {
    fromEvent(btnBuffer, 'click').subscribe(() => {
        replay$.subscribe(console.log)
    })
} // estegh orinak resubscribe eghav verjin 5 haty ugharkum e
// sranov kareli e history pahes, unes pahes ham cntrl z karas anes ham undo

const async$ = new AsyncSubject<number>();
async$.asObservable().subscribe(console.log)
async$.next(1)
async$.next(2)

async$.complete(); // next u complete aneluc heto nor kstanank arjeknery