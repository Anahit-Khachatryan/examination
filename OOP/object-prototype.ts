
function User2(this: any, name: string, age: number) { // this es ei grum vorovhetev error er talis
    if (age < 0) {
        throw new TypeError('Age must be greater than zero')
    }
    this.age = age;
    this.name = name;
    
}

//methody grum enk prototype-i vra
User2.prototype.method = function() {
    console.log('method works')
}

// prototypei mijocov karank stanank nayev inheritance
function Admin(this: any, name: string, age: number, role: 'Super' | 'System') { // this chka, error er dra hamar avelacreci
    User2.call(this, name, age ); // cally kanchum e functiony, arajin argumentov asum enk this ova, asum enk this es User2
    // sra xndiry na e erb kanchenk admin.method chi ashxati, prototype chi jarangvel, ete uzum enk petka dzerkov anenk
}

Admin.prototype = Object.create(User2.prototype) // ay es depkum nor admin.methody kashxati
Admin.prototype.deleteUser = function() {
    // logic
} // ays depkum admini vra klini ays methody, bayc User2-i vra chi lini, 

// const admin = new Admin('Name', 20, 'Super')

// mexanizm e vorov js objectnery jarangum en featurner mimyancic
// cankcacats objecti hamar prototype kara lini ira 'parent' object
// bolor objectnery unen prototype
// erb dimum enk propertyi js gnum e nayum e objectum, ete chgtav nayum e prototypeum, ete chgtav nayum e ira prototypein,amenaverjum mi hat object ka vori prototype-y null e
// dra hamar typeof null object e
