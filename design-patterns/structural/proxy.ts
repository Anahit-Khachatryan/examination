const obj: {[key: string]: any} = {
    property: 1
}
// uzum enk asenk te ov kara es obj dimi
const objProxy = new Proxy(obj, {
    get(target, propName) {
        console.log('Accessed')
        return target[propName as string]
    }
})

console.log(objProxy.property + 9)

class ThirdPartyApi1 {
    badMethod() {} // vatna chenk uzum vor app ogragortsi
}

const api = new ThirdPartyApi1();
api.badMethod()
const apiproxi = new Proxy(api, {
    get(target, propName: string | symbol) {
        if (propName === 'badMethod') {
            throw new Error('please dont use this method becauser ....')
        }

        return target[propName as keyof ThirdPartyApi1]
    }
})

//Proxyn object e vory nerkayacnum e urish object. Interface-y pahum e proxyn i tarberutyun facade-i u adapteri