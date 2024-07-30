class Person {
    firstName: string;
    lastName: string;
    protected age = 18;
    static count = 0;

    static getCount() {
        return Person.count;
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        Person.count++;
    }
    someOtherMethod() {
        this.increase(14); // sranic durs ches karogh private methody ogtagortsel
    }

    private increase(n: number) {
        this.age += n
    }

    getAge() {
        return this.age;
    }

    setAge(n: number) {
        if( n < 0 || n > 150) {
            throw new TypeError('Invalid age')
        }
    } 
}

const person = new Person('Armen', 'Vardanyan');
person.getAge();
console.log(Person.count)

class User11 extends Person {
    someMethod() {
        //age ksarkenk verevum protected // checkingnery teghi en unenum typescriptio compilaciayi jamanak

    }
}


// static propertiner, irank patkanum en henc classin voch te instance-in
//interface tuyl en talis nkaragrel objectnery inch tesk unen, aranc iranc bodyneri. nayev petka galis classnerin bacatrelu te iranc mej inch petka lini


interface Person12 {
    firstName: string;
    lastName: string;
}

// u arden karank ogragortsenk vorpes type
const person12 : Person12 = {
    firstName: "A",
    lastName: "B"
}

class User19 implements Person12 {
    firstName: string;
    lastName: string;

    constructor() {
        this.firstName = 'A',
        this.lastName = 'B'
    }
}

// interface-y karan extend linen

interface User4 extends Person12 {
    age: number;
    method(): number,
    type: UserType.Admin // ete poxvec hankarts enum em kpoxem mi tegh mnacatsum kpoxvi
}


//ENUM

enum UserType {
    Admin = 1, // numberi poxaren kara string el lini '1'
    Moderator = 2
}





//class-i propertinery ev methodnery tarber accessibility unen iranic durs. Drank linum en 3 tesaki` public, private, protecred
// public -hasaneli e bolorin, private- vor available en menak ed classin, isk protected ed classin u iranic jarangats bolor classnerin