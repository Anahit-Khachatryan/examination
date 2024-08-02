// Buffer-y stanum e urish observable source observablei valunery havakum e minchev myus obervable value emit chani, henc anum e havakvatsnery ugharkum e 
//Ete input observable ban emit charec obs chi ashxati
//Buffer vorpes gaghapar tsragravorman mej tegh e vortegh informationy havakvum e vor heto ira het ashxatenk(orinak fileri depkum)


import { of, buffer, interval, bufferCount, fromEvent, bufferToggle, withLatestFrom, map } from 'rxjs'

const int1$ = interval(1_000);



int1$.pipe(
    buffer(interval(3_000))
).subscribe(console.log)


//BufferCount - sa inch vor kanak e havakum nor ugharkum

int1$.pipe(
    bufferCount(5)
).subscribe(console.log)

//bufferTogle - hnaravorutyun e talis buffery anjatel miacnel
const open$ = fromEvent(document.querySelector('#open'), 'click');
const close$ = fromEvent(document.querySelector('#close'), 'click')

int1$.pipe(
    withLatestFrom(open$),
    map(([item]) => item),
    bufferToggle(open$, () => close$)
).subscribe(console.log)
//henc skzbic subscribe e linum chi spasum open lini nor. Vor spasenk open lini nor kanchenk , ed depkum kogtagortsenk withchLatestFrom(open$)


//bufferWhen


// kara ogtakar lini ete petk e file kardal kam stream video file e petk e kardank heto pause e talis toggle anenk