//Partial
function updateOrderInDatabase(order: Partial<Order>) {
 // save order to database
}

updateOrderInDatabase({address: 'Adress'}) // entadrenk chenk uzum poxancel bolory ayl inch vor meky
//typescripty tuyl e talis stanal nor type vori bolor keyery nullable en` Partial. Ordered mnuma e unchanged, bayc karank tank mi ktory


// mez petka kamayakan object , uzum em bacatrel inch proper karan linen inch typerov

type Dictionary = Record<string, any>; //2 parameter e keyery inch e linelu, valuen inch e linelu

const x9: Dictionary = {
    hello: 6
}


//Record

type Loading = Record<'customer' | 'address' | 'status', boolean>;

const loading: Loading = {
    customer: true,
    address: false,
    status: false
}

