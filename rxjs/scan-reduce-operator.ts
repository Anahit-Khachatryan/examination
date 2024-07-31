//Scany ashxatum e reduce -i nman, bayc voch te spasum e arjeknery havakvi tsayric tsayr, ayl yntackum nory galis e
//hiny pahats e linum ed gortsoghutyuny anum e
import { of, scan, reduce } from 'rxjs'

const numbers$ = of(1,2,3,7,8,9)

numbers$.pipe(
    scan((acc, n) => n+acc, 0), //amen kayli vra e gumari bany talis
).subscribe(console.log)

//reduce nuyn dzev e ashxatum vonc scany, bayc spasum e lriv complete eghats lini, inky minchev ed verjnakan agregate arjek havakats e linum u verjum arjeky talis e - 1 hat arjek e talu

numbers$.pipe(
    reduce((acc, n) => n+acc, 0),
).subscribe(console.log) 
