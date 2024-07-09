class Product {
    getWeight() {
        return 1 // ughaki mi ban greci
    }

    isDigital() {
        return this.getWeight() === 0.0 // sra poxaren grenk DigitalProduct class u jarangenk Productic

    }    
}

class DigitalProduct extends Product {
    /// estegh grenk popoxutyuny weight 0 sahmanel
}

let p1 = new Product();
let p2 = new Product();
//petka haskanank vorna digital vory che. aysinkn kashy stugelov - isDigital-ov
// sa ditarkum enk vor chenk unecel digital product ed heto enk avelacrel erb avelacela 
// sa stacvum e vor menk xaxtum enk opened to closed principles, aveli lava unenank espes mi hat DigitalProduct u en stugumy
// hanenk Productic


// classy, functiony ... bac e yndlaynman hamar, pak e popoxman hamar//
//Product class price, name, weight - mek el avelanuma digitalProduct(inky kash chi unenalu, weight: 0)
