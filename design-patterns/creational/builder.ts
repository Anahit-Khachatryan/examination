
class User {
    firstName: string = '';
    lastName: string = '';
    age: number = 0;
    occupation: string = '';
    email: string = '';
    isOnline: boolean = false;
    town: string = ''
}

const user1 = new User();
user1.firstName = 'A' // eskan bolori hamar chgrelu hamar steghtsum enk build

class UserBuilder {
    private user = new User();
    

    setFirstName(firstName: string) {
        this.user.firstName = firstName;
        return this;
    }

    setLastName(lastName: string) {
        this.user.lastName = lastName;
        return this;
    }

    setAge(age: number) {
        this.user.age = age;
        return this;
    }

    setTown(town: number) {
        this.user.age = town;
        return this;
    }

    setIsOnline(isOnline: boolean) {
        this.user.isOnline = isOnline;
        return this
    }

    setOccupation(occupation: string) {
        this.user.occupation = occupation;
        return this
    }

    build() {
        return {...this.user}
    }

}

const ub = new UserBuilder();
ub.setAge(20).setIsOnline(true).setOccupation('Developer');
const armen = ub.setLastName('Vardany6an').setFirstName('Armen').build();
const gevorg = ub.setLastName('Harutyunyan').setFirstName('Gev').build();
console.log('armen', armen)



//hnaravor e uzum enk steghtsenk nuyn objectic tarber tesakner, bayc unenk orinak 7 hat object voroncic mi hat propertyn e tarbervum
//harmar e steghtsel mi hat interface vor toghum e havakel ed karkasy, heto vory uzum enk havakenk
//implementation - uni setMethod, set en anum propertyn u veradardznum en this-y