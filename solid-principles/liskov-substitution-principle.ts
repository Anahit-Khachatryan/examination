
type Currency = 'USD' | 'AMD' | 'RUB';

class ProductLiskov {
    price: number = 0
    convertByCurrency(currency: Currency) {
       if (currency === 'USD') {
        return this.price
       } if (currency === 'AMD') {
          return this.price * 390 //getCurrenAMDRATE()
       } if (currency === 'RUB') {
        //
        return this.price * 4
       }
       return this.price
    }
}

class DigitalProductLiskov extends ProductLiskov {
  // petka orinak unena 20 tokos zeghch digitaly vra shukayum vor mrci
  //convertByCurrency-n kara kanchi cankacats teghic u hashvi getAmount()-y voroncic vomank kara lini digital u zeghcht chhashvi.
  convertByCurrencyDiscounted(currency: Currency) {
      //u estegh logikan grum e
      let price = this.convertByCurrency(currency);
      return (price - price*20/100)
  }

}

let b = new DigitalProductLiskov();
//dra hamar orinak karank instanceov stugenk yst dra anenk, bayc sa sxala kani vor bazayiny jarangic sksum es tarberel
// dra hamar karank overwrite anenk vor te ughaki urish anunov function grenk

//kara getAmount function lini vor zambyughum bolor aprankneri gnerna gumarum, bayc orinak ka digital vori vra zeghchy chi hashvum - getCurrency-n 
//




// ete unenk foo function, vory spasum e A tipi object - foo(A), bayc talis enk b tipi object, vory jarangum e A-ic - foo(b), tarberutyun chka
//Product class uni convertByCurrency, vory converta anum yst harcman. hima nayenk inchy kara xaxti es principle-y - orinak digitali depkum
// sa xaxtum er nranov vor kara kani vor extend aratsa kanchi digitali vra convertByCurrency u stana ayl ardyunk, inchy vor nra xaxtumna

