// Object create anelu dzevern en`

// Object literal

const obj1 = {
    name: 'An'
} // takic kanchum e new Object()

//Object Factory, sa en depkum orinak erb petka age stugel

function createUser(name: string, age: number) {
    if (age < 0) {
        throw new TypeError('Age must be greater than zero')
    }
  return {name, age}
}

function createAdmin(user: any, role: 'System' | 'SuperAdmin') {
   return {...user, role}
}

// const createAdminUser = compose(createAdmin,createUser)
// createAdminUser('Admin Name', 16, 'System')

const nomalUser = createUser('A', 17)

//function constructor - kara lini menak function-ov haytararvats, chi kara lambda-ov lini
//this haskanum e en contexty vory inky create e anum
// steghtsum e datark object, u ed objecty talis e iren vorpes this

function User1(this: any, name: string, age: number) { // this es ei grum vorovhetev error er talis
    if (age < 0) {
        throw new TypeError('Age must be greater than zero')
    }
    this.age = age;
    this.name = name;
    this.method = function() {
       console.log('method works')
    } // bayc methodnery ayspes chenk anum, vorovhete amen meki het inky create e linelu, methody kapum enk henc objectin voch te prototypein,
    // ete grum enk class, inky property chuni, bayc methodnery misht nuyn en, ankax objectic
}

const user = new (User1 as any)('Alice', 25);
const someOtherUser = new (User1 as any)('Af', 15);
user.method();
someOtherUser.method = function() {
    console.log('not working')
}
console.log('user method', user.method())

console.log('user', user)
console.log(user.name); // Alice
console.log(user.age);  // 25

//class syntax