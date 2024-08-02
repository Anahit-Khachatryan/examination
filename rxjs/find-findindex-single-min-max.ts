//Find - arjek enk talis asum enk esinchy gti stream-um, spasum e minchev ed datan ugharki, ete chugharki edpes el chi ugharki
//FindIndex - gtnum e elementy, bayc indexn e ugharkum te vorereord emitn e
//single - Single-y nmana first-in bayc asum e petka e mi hat ugharki u complete lini, ete erkrordy ekav uremn error kkci
//min/max - minimum u maximuma hashvu
//Es bolor operatornery ogtakar en ete arrayn enk sarkum obs 
 import {of, single, max, find} from 'rxjs'

const numbers$ = of(1,2,3,4,5);

// numbers$.pipe(
//     single()
// ).subscribe(console.log); //error kta

numbers$.pipe(
    max()
).subscribe(console.log) // min u max spasum en stremy complete lini ete complete chlini chi ugharki voch mi arjek

numbers$.pipe(
    find(n => n > 3)
).subscribe(console.log)// gtnum e arajin elementy vory vor mets e 3-ic
