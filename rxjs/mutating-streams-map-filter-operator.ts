// MAP , Filter, Scan, Reduce, toArray, switchMap, debounceTime - Lesson 2

//Obsevable-y uni pipe method
//Operatornery sarkvel en arandzin functionner u pipe-i mej menk talis enk, u vory import anenk menak da e linelu
//Erb pipe-in talis enk vercnum e da, gorts e anum u veradardznum e nor observable
//Inky tuyl e talis nayev custom operatorner gres. cankacats f vor observable e stanum u veradardznum observable inky kashxati

//Map operator - vercnum e observable bolor valunery u transformation e anum(value u index), array-i map-in e nman

import { of, map, pluck, filter } from 'rxjs'

const numbers$  = of(1,5,6, 7,8, 9)
numbers$.pipe(
    map(x => x*10)
).subscribe(console.log) // inky nor observable e talis erb en mekic ban krakec inky ed kstana map aratsy kez kta. i tarberutyun array-i vory datark array e sarkum lcnum e mejy

//ete menk unenk objectneri stram, uzum enk tpel AB-n, karank ogtagortsenk pluck operatory
const objects$ = of({name: 'A'}, {name: 'B'})
objects$.pipe(
    map(obj => obj.name)
).subscribe(console.log)

//aveli lava pluck
objects$.pipe(
    pluck('name')
).subscribe(console.log)

//Filtery predcate function e stanum(function vory veradardznum e boolean) u paymanain hamapatasxanogh arjeknery tuyl e talis sharunaki mnacatsy korum en

numbers$.pipe(
    filter(n => n % 2 === 0)
).subscribe(console.log)

//entadrenk uzum enk zuygeri karakusi bardzracnel
// ([1, 2, 3, 4, 5] as number[]).filter((n: number) => n % 2 ===0).map((x: number) => x ** 2) //hishoghutyan vra aveli tsanr e linum
numbers$.pipe(
    filter(n => n % 2 === 0),
    map(x => x ** 2)
).subscribe(console.log) // sra lavy ena vor nor arrayner chen sarkvelu ughaki arjeknery galu e

//filtery nayev lav kirarutyun uni ete heto petka gres if miangamic kgres ed filterov

numbers$.pipe(
    filter(n => n === 5),
    map(x => x **2)
).subscribe(console.log)