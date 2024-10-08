function basicMixin() {
    return class {
        method() {
            console.log('Hello')
        }
    }
}

type Constructor<T> = {
    new(): T
}

//type jisht grelu dzevy nayel DestroyMixin-ov

function notBasicMixin<T>(cls: Constructor<T> = class{} as any): Constructor<T> {
    class Extended extends(cls as any) {
        anotherMethod() {
            console.log('Another Hello')
        }
    }
    return Extended as unknown as Constructor<T>
}

// Orinak ngOnDestroy angulari depkum



class MyClass extends notBasicMixin(basicMixin()) {

}

const myInstance = new MyClass();
console.log(myInstance.method());


// type Constructor<T = {}> = new (...args: any[]) => T;

// function DestroyMixin<T extends Constructor<{}>>(Base: T) {
//   return class extends Base implements OnDestroy {
//     ngDestroy = new Subject();

//     ngOnDestroy() {
//       this.ngDestroy.next();
//       this.ngDestroy.complete();
//     }
//   };
// }