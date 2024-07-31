import { of, map} from 'rxjs'

of('World')
.subscribe({                              //mijiny observern e
    next(value) {
        console.log('value', value)
    },
    complete() {
      console.log('complete')
    },
    error(err) {
        console.log(`Error ${err}`)
    }
})


of('World')
.subscribe(console.log)  //espes inky haskanum e nextn e, short hand el chenk grum, talis enk ughaki functiony

const obs$ = of('World')
const subscription = obs$.subscribe(console.log) //arjeknery nuyn e galu bayc subscription tarber e
const a = obs$.subscribe(console.log)

// subscriptionnery irar het combinacnel
subscription.add(a);
subscription.unsubscribe();


//Observable-i logikan custom grvats
type Observer<T> = (value: T) => void;

class Observable<T> {
    subscriptions:Observer<T>[] = []
    creatorFn!: (observer: Observer<T>) => void;

    subscribe(observer: Observer<T>) {
      this.subscriptions.push(observer);
      this.creatorFn(observer)
    }

    static create<T>(creatorFn: (observer: Observer<T>) => void) {
       const obs = new Observable();
       obs.creatorFn = creatorFn;
       return obs
    }
}

Observable.create(observer => {
    setInterval(() => {
        observer(1);
        observer(2);
        observer(3);
    },1000);
}).subscribe(console.log)

// new Observable((subscriber) => {
//     document.addEventListener('click', event => subscriber.next(event))
// }).subscribe(console.log)



