class Vehicle4 {
    location?: string;
    gas!: number;
    type!: 'Car' | 'Airplane' | 'Boat'

    move(x: number, y: number) {
        this.gas--;
        // switch(this.type) {
        //     case 'Airplane': 
        //      //
        //      //
        //     case 'Car':
        //      //
        //      //
        //     case 'Boat':
        //     //
        //     //
        //     default:
        //     //
        // } sa hanum enk arandzin classner enk sarkum
    }

    repair() {
        //nuyn es erkar switch casery karan esteghh lini, sa lav chi, lutsumy amen meki hamar mi hat class enk sarkum
    }
}

//petka unenal Car class aranzin
class Car4 extends Vehicle4 {
    type = 'Car' as 'Car';
    move(x: number, y: number) {
      super.move(x,y)
      //logic estegh enk grum
    }
}

class Boat extends Vehicle4 {
    type = 'Boat' as 'Boat';

    move(x: number, y: number) {
        super.move(x,y)
        //logic estegh enk grum
      }
}
class Airplane extends Vehicle4 {
    type = 'Airplane' as 'Airplane';
    move(x: number, y: number) {
        super.move(x,y)
        //logic estegh enk grum
      }
}



// method vori anuny urish bana urih ban e anum
// erkar methodnery
//

//Best Practice
//Reduce the number of arguments - lutstumneric meky talis enk mi hat argument objectov u mejy ed shat argumentnery vory espes enk talis
//reduce the size of method
//en classy voric gnum en jarangumnery, bayc inky voch mekic chi jarangum petk e lini abtract(abstract classy new ches karogh anel - instance ches karogh sarkel, abstract method should be overridden in subclasses)

