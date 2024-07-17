// 25-ropeic OOP 2-rd das
class SomeAngularService {

    constructor(private readonly localStorage: LocalStorageWrapper) {

    }

    writeSomethingToLocalStorage(data: string) {
        // const name = localStorage.getItem('name');
        // localStorage.setItem('data', data) // sa test environmentum orinak run anenk kara lriv urish ban lini

        //jisht tarberak
        const name = this.localStorage.get('name');
        this.localStorage.set('data', data)
    }
}
//ays xndiry lutsvum e dependency injection-ov

class LocalStorageWrapper {
   set() {

   }

   get() {}
}

//sa testum arden karank anenk ayspes
class MockLocalStorage {
    get() {
        return 'my name value'
    }

    set() {}
}


// dependency injection(ներարկել, տեղադրել) object composition e, vory voroshvum e voch te classi mej grvats codov, ayl classic durs
//aysinkn en dzevov vonc arecink new Location chenk anum, ayl application dursna da anumՉclassy ունենումա location, բայց դա ոնցա արվում, ոնցա հայտնվում այդտեղ class չգիտի) - unenal mets object՝ structura vory  kkazmakerpi, sovorabar asum en injector - vory kkazmakerpi
//injectionov ashxatelu hamar petka provider unenas. Providery codi inch vor ktora vory bacatrum e dependency instance vonc e sarkvelu
//Angularum unenk providneri array inch vor modulum, urish modulum asum enk inject ara,injectory galisa providerum tesnum e ay es classn e uzum,class-y new e anum, mez talis e. 
// Uni tokener(ed barna vorov injectory janachum e te inch petk e ani) - angularum nkati unenk en inch constructorum grum enk` orinak httpClient, inky token e es depkum, http clienty vercnum e gtnum e iren hamapatasxanogh providery
// Provide anelu tarber dzerver kan - sranc masin petka kardam - kaxvats useClass, useFacory .... amen meky mi dzeva bacatrum te vonca tvyal objecty datan gtnelu u inject anelu
// sa hnaravorutyun e talis erb object steghtsvi nor ed jamanak inject anenk