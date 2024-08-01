//Merge-y  - liky observablener enk talis, iranc arjeknery blend e anum(bolori arjeknery hertov talis e erb linum e), stacvats type linelu e kamov | -ov. Complete e linum ete bolory complete e linum
//caser - combine anenk eji vra bolor eventery, orinak monitoring enk anum, uzum enk vercnel server data ugharkel
//websocket unenk mi shark eventer kan vori depkum petka reconnect linel - 3 depkum el nuyn gortsoghutyun petka anel
//ngrx-i depkum el mi kani actioni depkum es gortsgoghutyuny ara
//mi kani formControli(input-i) depkum petka inch vor gortsoghutyun anel

import { fromEvent, merge, map, tap } from 'rxjs'

const click$ = fromEvent<MouseEvent>(document, 'click');
const rightClick$ = fromEvent<MouseEvent>(document, 'contextmenu');

merge(click$, rightClick$).pipe(
    tap(e => e.preventDefault()),
    map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
  ).subscribe(console.log); // irank irar het talis en mi stream
