//Forkjoin - vercnum e inch vor observablener spasum e bolory complete linen, talu e verjin arjeky. nman e Promise.all-in
// Ete sourceeric meky complete chlini mer streamn el complete chi lini. mijankyal arjeknery korats en u vorpes array ed arjeknery kta
//himnakanum ashxatum e http calleri het

import { forkJoin, of} from 'rxjs';

const obs1$ = of(1,2,3);
const obs2$ = of(4,5,6);

forkJoin([obs1$, obs2$]).subscribe(console.log)  //kta [3,6] yst hertakanutyan e talis

