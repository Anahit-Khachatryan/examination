// Vernum e observablener, erb arajin observable arjek e ugharkum, inky vercnum e nra amenaverjiny tuple e sarkum ugharkum
// Nman e combineLatest-in, bayc combine-i depkum ete mekn u meky arjek ugharkec  ugharkum e , isk withLatestFrom-i depkum menak source observabley kap uni ete inky chi krakel myusy inchkan uzum e ugharki ban chi ani
// skzbi arajin angamvany petka 2-sn el ugharki nor

import { interval, withLatestFrom, take} from 'rxjs'

const int1$ = interval(2_000)
const int2$ = interval(1_000).pipe(take(5)) // meka yndhanur observable complete chi linum, ugharkum e arjekner

int1$.pipe(
    withLatestFrom(int2$)
).subscribe(console.log)

//sa asum e shat e ogtagortsvum, nayel
//ngrx-um effectnerum e ogtagortsvum, karevor e imanal vor ete grenk WithLatestFrom observable-i, orinak http call, 
// inky miangamic subscribe e linum, aysinkn cally arvelu e, chi spaselu source-y emit ani value nor subscribe lini


