class UserService {
    //hundreds of methods
    loadCurrenUser() {}
}

class AuthenticationService {
    //methods
    checkAuth() {}
}

class OrderService {
    //methods
    loadOrder() {}
}

class UI {
    // orders = new OrderService();
    // auth = new AuthenticationService();
    // users = new UserService();

    // //my method

    // onInit() {
    //     this.orders.loadOrder();
    //     this.users.loadCurrenUser();
    //     this.auth.checkAuth();
    // } ay eskan ban anelu poxaren grum enk DataService


    data = new DataService();
    onInit() {
        this.data.getData()
    }
}


class DataService { // sa irenic nerkayacnum e facade, vonc vor adapter, bayc mets systemayi hamar
    orders = new OrderService();
    auth = new AuthenticationService();
    users = new UserService();

    getData() {
        this.orders.loadOrder();
        this.users.loadCurrenUser();
        this.auth.checkAuth();
    }

}


// simple interface e provide anum complex systemi. Consumery uzum e orinak hasarak interface inch vor bard complex functionality het ashxatelu
// orinak mez mot ngrx-y store-y facade e, enteghic select e anum. heto e dispatch e anum action