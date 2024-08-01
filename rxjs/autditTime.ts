//AuditTime- jamanak enk talis erb value e galis skzbic ignore e anum, spasum e jamanaky lrana verjin ugharkatsna ugharkum. AuditTime Estegh timery ankax emitioneric anum e,
//isk debounceTime-i dempkum spasum e mi hat emition lini nora timer anum, timery arec verjacav dranic heto gortogutyuna anum u noric timera anum
//demounce time spasum e yndhanrapes chlini emitin, isk audittime-y kara 1 milivarkyan araj lini inky kta, ete eghela avenaverjiny ugharkum e ete chi eghel chi ugharkum
import {auditTime, debounceTime, fromEvent, interval} from 'rxjs'

interval(50).pipe(
    auditTime(2_000)
).subscribe(console.log) // sa debounce-i depkum ban chi tpi, kani vor ha ashxatelu e


const click$ = fromEvent(document, 'click');
click$.pipe(auditTime(1_000)).subscribe(console.log);

//debounce time-i depkum petka dadares click anel 1 varkyan ancni nor ga- spasuma edkan jamanak chlini voch mi ban nor ugharki, auditTime edkan interval mek ugharkum e

//ete inch vor arjekner shat araga galis orinak websocketneric, canvasi vra ban enk nkarum dra himan vra, auditTime enk dnum asum enk eskan varykyany mek emit ara

