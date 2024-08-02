// throttle-y - vercnum e observable-i mej ete talis enk urish observable edkan jamanak ignore e anum arjeknery
//tarbervum e  arjek chi ugharkelu enkan jamanak
//DebounceTime-y - arjek pahelu e spaselu e edkan jamanak ancni nor ugharki
//AuditTime-ic el tarbervum e throttleTime vor throtlle-y voch te jamanak meka stugum anum, ayl spasum e source ugharki nor e emit anum


import { debounce, interval, throttleTime,  debounceTime, auditTime} from 'rxjs'
const int1$ = interval(1_000)
int1$.pipe(
    throttleTime(5_000)
).subscribe(console.log)
//DebounceTime depkum sa che ashxati, kani vor Since the source observable emits a new value every second, 
// debounceTime never gets a chance to wait for the full 5 seconds without another emission.