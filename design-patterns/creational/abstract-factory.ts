
//ete unenk error petka ed errory granci
 
const Environment = 'Prod'
class Logger {
    log(error: Error) {
        console.log('error', error)
        // switch(Environment) {
        //     case 'Prod':
        //         //implementation;
        //     case 'QA': 
        // } 
        // bayc espes lav chi
    }

}

//sra teghy grum enk espes

interface Logger {
    log(error: Error): void
}
class LocalLogger implements Logger {
  log(error: Error) {}
} 

class QALogger implements Logger {
    log(error: Error) {}
}

class ProdLogger implements Logger {
    log(error: Error) {}
}

function loggerFactory(): Logger {
  switch(Environment) {
    case 'LOCAL': 
    return new LocalLogger();
    case 'QA':
        return new QALogger();
    case 'Prod':
        return new ProdLogger();
    default: return new ProdLogger();
  }
}

const logger = loggerFactory();

try {
    //code that migh throw an error
} catch (err) {
    logger.log(err as Error)
}
//consumnerin chi hetakrkrum vonc log anel, u abstract factoryn da irenc talis e

//patkeracnenk unenk tarber environmentner local env - ughaki log petk e ani , qa env -wum orinak unenk hatuk service vor http call enk ugharkum errory grvats,vor qa testcasery tesnen
// unenk PROD environment - http call petka gna bayc arden urish serviceov urish http-i, vortegh ka mi file vor save e anum ed errory

//hima orinaky anenk paymanic kaxvats






//Abstract Factory-i masin
// function է, որը ստեղծում է նույն տեսակի ընտանիքի օբյեկներից 1 հատ օբյեկտ՝ կախված environment-i դատայից
//ունենք դատա կարդալու 2 տեսակի օբյեկտ՝ մեկը JSON-ից է կարդում, մյուսը XML-ից։ 2-սն էլ նույն մեթոդներն ունեն՝ readData, wrtieData ..., բայց դե implementation-ը տարբերա։
//բայց ինչ որ service kam class ուզում է կարդա, իրա համար մեկա կլինի XML թե JSON, դրա համար կարանք ունենանք reader(sa mez mot abstract factory e), որը կախված որնա, համապատասխան Instance սարքում է և դա է քեզ տալիս 