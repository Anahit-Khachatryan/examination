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
// https://drive.google.com/file/d/1OksMfy0_jx5mkvxG7bWz5_kNga_sgnS2/view - shat lavna dependency injectory bacatrum
//Injectorineri hearxia - nullInjector, PlatformInjector, RootInjector u lezyneri hamar steghtsvum e childInjectorner
//provided in root rootInjectorn e u ed app-i shrjanakum inky 1 instance e steghtsum, any amen meki hamar mi instance , platformi depkum` ete 2 project unenank ed 2-i hamar mi instance klini - 
//treeshakable - testModule arel em import bayc chem ogtagortsel chi haytnvi bundleingum, ete Injectable providedIn: root-ov anenk, bayc moduleum chgrancenk chi haytnvi bundleum-treeshakeble e
//Injectorneri tesakner - moduleInjector, elementInjector` componentum provider: [] - mej dnel - sa hasaneli e linelu tvyal componentum u vorovnk vor render eghats en ed componenti mej
//elementneri hamar steghtsum e elementInjector vory reslove e anum componenti providerum u hasaneli klini ed componentum render eghats bolorum


//vonc enk ogtagortsum
//modifiernery DI` vortegh vor inject enk anum karogh enk inch vor dzev karavarenk minchev ur bardzrana hiearxayov, ira mej man ga te chga
//@Optional()(karank ogtagortsenk bolori het) - resolution modifier - sra mijocov asum enk service kara provide eghats lini kara chlini - erb hierxayov gnum e hasnum e nullInjector tesnum e optionala drats veradardznum e null, ete chliner ktar nullInjector errory.
//@Self -erb sksum e resolve anel, miayn nayum e ira elementInjectori mej el verev chi bardzranum - entadrenk 2 tegh(home u child) nuyn serviceic petka bayc uzum enk tarber instancener linen, ed depkum ayspes enk grum
//@SkipSelf - sa asum enk vor man gas ko elementInjectory bac togh sharunaki verevic
//@Host - sranov asum enk host elementi providerneric ogtvi voch te ko - orinak dnum enk directive  asum enk host eghats elementi providerin nayi
//CommonModulei masin - ngIf ev ayl srank ogtagortselu hamara. Bayc orinak app.module-um chenk anum bayc karum enk ogtagortsel, vorovhetev BrowserModuley ir hertin import anuma het export CommonModuly
//ng-contenti masin - entadrenk enpisi component unenk  vor karan tarber componenter render linen -1.51 ropeica xosum - dynamic, inch gren klini da
//viewProvider: [ServiceName] - nayev sa ka, bayc sranov ng-contentin- dynamicin hasnali chi lini

//vonc enk provide anum ` useClass, useValue, useFactory, useExisting
// tarberutyuny sovorakan moduleum service provide anelu u useClass ban ogtagortselu
// providers:  [
//     LoaderService,
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true,
//     },
//   ];
// Arajini depkum class-i anunov key e sarkvum cantaineri mej vory steghtsum e Injectory, valuen el servicei instance-y(ays depkum inkna takic anum, isk myusi depkum provideov menk enk talis tokeny)
//2-rd depkum eli provider enk avelacnum, provide-ov asum enk vorn e DI-tokeny, vory DI containeri keyn e henc handisanum u dranov el inject enk anum containeri mej
//multin - erb multin true enk dnum inky voroshum e vor orinak hajord interceptery unenank(keyn nuyna linum, vor override charvi vonc vor sovorakan LoaderService-i depkum kliner ete 2 hat liner nuyn anunov serviceic) keyn linum e [HTTP_INTERCEPTORS] valuen linum e voch te service instance ayl array [new AuthInterceptor, new TokenIntercepter] instanceneric useClass-i depkum tvats classy , loaderServicei depkum orinak senc 'LoadService': new LoadService();
// aysinkn containeri mej irank arrayov en pahum voch te instance-y, ete false lini ovveride klini menak verjiny klini containeri mej
// ( const container = {
//     'LoaderService': new LoaderService(),
//     [HTTP_INTERCEPTORS.toString()]: [new AuthInterceptor(), new TokenIntercepter()]
//  })
// {
    //       provide: HTTP_INTERCEPTORS,
    //       useClass: AuthInterceptor,
    //       multi: true,
    //     },    
//    {
    //       provide: HTTP_INTERCEPTORS,
    //       useClass: TokenIntercepetor,
    //       multi: true,
    //     },

//hima nayenk vonc enk inject anum, henc token ov el inject enk anum
// //constructor (@Inject('HTTP_INTERCEPTORS') private interceptors: AuthInterceptor) {
//   console.log(this.interceptors[0].intercept())
// }


//nayel enk patrasti tokeny depky bayc menk el karogh enk token steghtsel`
// // const TEST_TOKEN = new InjectionToken('test') 
// {provide: TEST_TOKEN,
//  useClass: LoadService,
// }

// constructor(@Inject(TEST_TOKEN) private oadService: LoadService) {}

//useValue - i depkum instancen enk grum, inch vor object enk grum
// {
//     provide: TEST_TOKEN,
//     useValue: instance
// }

export interface IInstance {
    data: number
}

export const instance = {
    data: 5
} as IInstance
// constructor(@Inject(TEST_TOKEN) private testService: IInstance) {
    //   console.log('testService', this.testService.data)
// }


//useExisting - entadrenk orinak unenk LoadService, asum enk eghats-goyutyun unecog providerneric meky ogtagortsi. es depkum tarber anunnerov tokener en linum, bayc nuyn instancen en pahum
//providers:  [
    //     LoaderService,
    //     {
    //       provide: TEST_TOKEN,
    //       useExisting: LoaderService,     
    //     },
    //   ];

    // const test = new LoaderService(); u erkusi tak el sa e linum


//useFactory - talis enk function vory veradardznum e inch vor object 
//providers:  [
    //    TestService,
    //     {
    //       provide: TEST_TOKEN,
    //       useFactory: (testService: testService) => {
            //  return {
            //     data: testService.data
            //  }
        //    },
    //     deps: [TestService] // estegh parametrery poxancum enk hertakanutyamb ete parametr e spasum  
    // //     },
    //   ];
// constructor(@Inject(TEST_TOKEN) private testService: IInstance) {
    //   console.log('testService', this.testService.data)
// }

//useValue-i kirarutyun - vor inch vor configuration unenank, vory inch vor object e irenic nerkayacnum,u ed configy vorpes service provide anenk - sa mi kirarutyun
//useExisting - entadrenk unenk TestService, inch vor update e linum, vor chgnank bolor teghery poxenk baci da karogha inch vor konkret tegher en petk poxel
//da grum eink` 
providers: [
// TestService, // sa khanenk useExistingi jamanak, ete chhanenk ovveride karvi
// AnotherService,
// provide: TestService,
// useClass: AnotherService
]
// bayc nor componentnerum ho chenk eli gri hiny key vercru, ogtagortsi nory, ed depkum grum enk espes`
// userExisting: TestService

// useFactory -i orinak - uzum enk ynenc provider steghtsel vor inch vor paymanic kaxvats kara dependancy unenal kara chunena. runtime e da voroshvum - orinak TranslateLoader e- asum es togh TranslateLoader-i tak ashxati im grats classy espes es anum
// provide: TranslateLoader,
// useFactory: createTranslateLoader,
// deps: [HttpClient], // sranov el parameter enk talis

// export function createTranslateLoader(http: HttpClient): any {
//     return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
//   }


// Amen DOM Node uni ir elementInjectory, amen elementInjector uni ir parent, documentic durs rootInjectorn e, dranic verev nullInjectory
//MOdifikacnum es te vonc dimes - skipself bana