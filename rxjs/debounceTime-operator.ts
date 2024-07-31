//DebountTime jamanaki het e ashxatum, inky tuyle e talis observable-ic inch vor arjek ga, ete naxord emitionic inch vor jamanak ancel e
//naxordnery cancel e anum, verjiny jamanaky henc ancni kugharki

import { debounceTime, fromEvent } from "rxjs";

fromEvent(document, 'click').pipe(
    debounceTime(1_000)
).subscribe(console.log) 

//ogtakar e erb user tpum e, anyndhat key seghmelu vra vor api call ches  ugharki, debounceTime es anum

