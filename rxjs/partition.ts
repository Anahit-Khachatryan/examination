//Partition - vercnum e observable veradardznum e 2 hat observable
//Payman e stanum u paymani himan vra 2 hat observable e sarkum, true-i hamar arandzin false-i hamar arandzin
import { interval, partition, take} from 'rxjs'

const int1$ = interval(1_000).pipe(take(5))


const [a, b] = partition(int1$, (i) => i % 2 ===0) //tuple e 2 hat observable-i

a.subscribe(console.log)
b.subscribe(console.log)

//if-erov chgrelu poxaren anum enk partition
//kam ogtakar e erb true petka handel anel misht, isk b-n inch vor paymanneri depkum. b-n withLatestfrom -ov ktank urishin

