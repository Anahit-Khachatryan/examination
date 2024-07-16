//Observer-y hetevum e observable-i popoxutyunnerin
interface Observer<T> {
    next(notification: T): void;
    error?(error: Error): void;
    complete(): void;
}

class Observable<T> {
    private subscribers: Observer<T>[] = [];
    private builder: (observer: Observer<T>) => any;

    constructor(builder: (observer: Observer<T>) => any) {
        this.builder = builder;
        console.log('this.builder', this.builder);
       this.subscribers.forEach(sub => {
        console.log('sub111', sub)
        builder(sub)
       });
    }

    subscribe(observer: Observer<T>) {
       this.subscribers.push(observer);
       this.builder(observer)
    }
}

const interval = new Observable(observer => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        observer.next(count);
        if (count === 3) {
            clearInterval(interval);
            observer.complete();
        }
    }, 1000)
})

interval.subscribe({
    next(count) {
        console.log('count', count)
    },

    complete() {
        console.log('completed');
    }
})

interval.subscribe({
    next(count: number) {
        console.log('count', count * 1000)
    },

    complete() {
        console.log('completed');
    }
})


// Observer - rxjs-ic e haytni. design patterna, vori jamanak kan push base notificationner, 
// aysinkn applicationi mi ktor voch te kanchum e urish ktroi functiony kam methody ayl ugharkum e 
// eventi nman notification datayov ov kardac um hetakrkira notificaiony inky kara vercni ed notificationi het ashxati.
//lutsum e mets design, uzum enk decouple anenk, voch te kancenk edkan function, ayl dispatch anenk, ov uzum e inky karda
