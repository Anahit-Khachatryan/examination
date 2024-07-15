
class UserPrototype {
    firstName!: string;
    lastName!: string;
    age!: number;
    clone() {
       return deepCopy(this) 
    }
}

function deepCopy(obj: Object) {
    return {...obj}
}

let z = new UserPrototype();
z.lastName = 'Gha' // es masy kareli e anel builderov
z.clone()
console.log('z', z)

// object e vory uni clone method, npataky karanank mi source-ic steghtenk tsarer. kap chuni js prototype-i het- dra implementacia chi
//angularum http interceptor class uni handle method, vory stanum e request objecty, vory prototype method, vory karogh enk anel .clone // es masy karank heto nayel