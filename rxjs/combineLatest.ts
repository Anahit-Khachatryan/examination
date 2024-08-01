//CombineLatest - list enk talis observableneri, erb vor mekn u meky notification e ugharkum, vercnum e da - nory, myusneri verjiny ugharkum e bolory irar het. Amenatarm tvyalnery vonc vor stanas
//ForkJoin spasum e bolory verjanan nor ugharki, inky amen yurakanchyuri ugharkeluc da u amenaverjin tvyalnery ugharkum e array-i teskov
//Erb bolor streamnery complete linen nor inky complete klini

// UseCases
// formi mej 2 hat dropdown unenk ete specific arjekner linen ed depkum petk e disable lini. Kareli e vercnel 2-i valueChanges combine anenk u stugenk ete jisht arjeknern en ed gortsoghutyuny anel

import { combineLatest, fromEvent, tap, map } from "rxjs";


const clicks$ = fromEvent<MouseEvent>(document, 'click');
const rightClick$ = fromEvent<MouseEvent>(document, 'contextmenu');
const dblClick$ = fromEvent<MouseEvent>(document, 'dblclick');

combineLatest([
    clicks$,
    rightClick$,
    dblClick$
]).pipe(
    tap((events) => events.forEach(e => e.preventDefault())),//sa el chi ashxati ete bolor obs chashxaten 
    map(([clickEvent, rightClickEvent, dblClickEvent]) => ({
        click: { x: clickEvent.clientX, y: clickEvent.clientY },
        rightClick: { x: rightClickEvent.clientX, y: rightClickEvent.clientY },
        dblClick: { x: dblClickEvent.clientX, y: dblClickEvent.clientY }
    }))
).subscribe(console.log)

// inky tuple e ynkalum, u arjeky talis e tuple - es depkum 3 hatic baghkacats
//petka bolory ashxaten vor nor sksi ugharkel. skzbic bolory petka skzbic mi angam ashxaten dranic heto arden vorn el lini kugharki