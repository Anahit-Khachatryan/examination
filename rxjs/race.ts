//Promice.race-i nman e ashxatum , bayc ete menk promise.race-i depkum spasum enk arajiny verjana estegh vercnum e mi shark observablener arajiny ov emit arec dran e subsribe linum mnacatsy antesum e

import { race, interval } from 'rxjs';

const int1$ = interval(1_000)
const int2$ = interval(2_000)
const int3$ = interval(3_000)

race([int1$, int2$, int3$]).subscribe(console.log) // arajinin subscribe klini mnacatsin subscribe el chi linum

//kara ogtakar lini unit testeri depkum, kam ete mi shark socketner kan petka orinak arajiny haghti xagha, grum es race iran es lsum