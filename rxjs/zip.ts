// Zip-y nuyn e inch combineLatest bayc arjek ugharkelu hamar spasum e bolory nor arjek tan nor ugharki

import { zip, interval, take, combineLatest} from 'rxjs'

const int1$ = interval(1_000).pipe(take(5));
const int2$ = interval(2_000).pipe(take(5)); 
const int3$ = interval(3_000).pipe(take(5)); 

zip([int1$, int2$, int3$]).subscribe(console.log) // inky bolori emit aratsney zip arats ugharkum e emity ugharki nor ugharki. voch mi arjek chi korum
//combineLatest spasum e amenaaragin


//zipy karank ogragortsenk ete array enk uzum irar het kpcnel
//combineLatest u withLatestFrom arjekner en korcnum, zip che. Menak kkorci ete meky complete lini
//merge-n el arjek chi korcnum