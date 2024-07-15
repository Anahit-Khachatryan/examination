//example of mediator
class Store<T> {
    private  state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }

    setState(newPartialState: Partial<T>) {
        this.state = {...this.state, ...newPartialState};
    }

    getState(): T {
       return this.state
    }
}

interface State {
    [key: string]: any;
}

const store = new Store<State>({name: 'My State'});

function a1() {
 //logic
 const state = store.getState();
 store.setState({x: 6})
}

function b1() {
 //logic

 store.setState({anotherName: 'Another Name'})

}

function c() {
 //logic
 const {anotherName} = store.getState();

}

a1();
b1();
c() // mi teghic state e grancum, urish teghic karank grenk ev ogtagortsenk
console.log('store', store)

//tarber instance-er irar het e kapum, karelia patkeracnel facade bayc vor nuyn interface uni bolori hamar, orinak e microservicenery