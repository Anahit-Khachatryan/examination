abstract class ProductInterfaceSegrafation { 
//   abstract expire(): void;
//   abstract ship(): void;
//   abstract replace(): void; te inchi petka es depkum choghtagortenk abstracty ayl anenk interfaceov
  // ayspes grelu poxaren es principov sahmanum enk interface-er, u cankcacats class arden vor jarangela
//   stipvats chi verasahmanel srank ayl yst anhrajeshtutyan kirakanacni

}

class DigitalProductSegrafation extends ProductInterfaceSegrafation  implements IShippable, IReplacable{
   ship() {

   }
   replace(): void {
       
   }

//    expire(): void {
//        // DigitalProducty chuni expire jamket, bayc petka verasahmanenk datark contextov, sa arden
//       // stacvuma jarangneric voreve mekin unenal behaviour vory inky support chi anum
//    }
}

class PhysicalProduct extends ProductInterfaceSegrafation implements IShippable, IExpirable {
    ship(): void {}

    expire(): void {
        
    }
}

class Book extends Product implements IShippable, IReplacable {
    ship(): void {
        
    }
    replace(): void {
        
    }
}

class RealEstate extends Product implements IExpirable {
    expire(): void {
        
    }
}


interface IShippable {
    ship(): void
}

interface IReplacable {
    replace(): void
}

interface IExpirable {
    expire(): void
}




// producty kara expire lini, ship anes
// bayc product ka vor ches kara ship anes orinak tuny
//product ka vor orinak expire chi linum, orinak digital producty
// orinak product ka ches kara replace anes
//Erb menk tarajnatum enk amen mi interface - chenk xckum bolory irar het, hnaravorutyun enk talis classin irakancacnel
// menak en interface vory imast uni ira hamar, sa shat e jkunacnum hamakargy
