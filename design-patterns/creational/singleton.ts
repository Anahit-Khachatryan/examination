class Singleton {
   private static instance: Singleton;
   
   private constructor() {} // sa nshanakum e vor artakinic voch vok chi karogh new anel 

   method() { 

   }
   static getInstance(): Singleton {
    if (Singleton.instance === null) {
        Singleton.instance = new Singleton()
    }
    return Singleton.instance;
   }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

//Լուծում է խնդիր, եթե պետք է լինի 1 հատ instance, գլոբալ access է պետք դրսից(օրինակ Անգուլյարի dependancy injection-y մոդուլի մակարդակով)
