//Distinct - apahovum e vor misht unikal arjekner stanank, ete nuyn arjeky mi kani angama galis hetaga ekats arjeknery ignore e anum
//distinctUntilChanged - tuyl chi talis irar hetevic ekogh nuynanman arjekner 
//1,2,3,1 - sa distinctUntilChanged ignoe chi ani, isk distinct 1,2,3 kta

//distinctUntilChanged kara ynduni callback , kani vor ete objectner en galis by default hamematvum en 3 havasarov, reference-ov, 
// distinctUntilKeyChanged - tuyle talis key-ov nayel
import { of, distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs'

const objects$ = of({id: 1}, {id: 2}, {id: 3}, {id: 1}, {id: 1} )

objects$.pipe(
 distinct(),
).subscribe(console.log) // es depkum distincty chi ogni

objects$.pipe(
    distinct(obj => obj.id),
   ).subscribe(console.log) // ayspes petk e ani // 

objects$.pipe(
    distinctUntilChanged((obj1, obj2) => obj1.id === obj2.id),
   ).subscribe(console.log)

   objects$.pipe(
    distinctUntilKeyChanged('id')
   ).subscribe(console.log) // ete  gites inch key-ov es stugum sa es ogtagortsum