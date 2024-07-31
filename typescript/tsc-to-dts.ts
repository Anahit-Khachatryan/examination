class Person98 {
    firstName!: string;
    lastName!: string;
    age!: number

    constructor() {
        console.log('person created')
    }

}

enum Roles {
    SuperAdmin = 1,
    Moderator = 2
}

class Admin98 extends Person98 {
    role!: Roles
}