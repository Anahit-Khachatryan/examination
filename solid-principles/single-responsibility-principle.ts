// ezaki patasxanatvutyun - targmanvats

class Canvas {
    draw() {}

    getDrawing() {}
}

class ImageExporter {
    private customFormat: any
    constructor(private canvas: Canvas) {
        // this.customFormat = canvas.getDrawing();
    }
    imageExporter() {
        this.customFormat = canvas.getDrawing();
    }
}

let canvas = new Canvas()
let a = new ImageExporter(canvas)
console.log('a', a.imageExporter()) // sa berum e nran vor ete canvas ogtagortselu e orinak designer u marketing cordinatory -
// ays popoxutyunic heto darnuma vor designer role unecoghy, isk imageExporter anoghy markering coordinator role unecoghy

//petka unenan 1 ket popoxvelu hamar(1 reason to change) - ete unenk tarber tesaki userner(tarber derer unecogh), 
// irank ogtagortsum en nuyn bany, orinak moduly da petka tsarayi mek andzin, (oirnaky canvas nkarelu ev ed nkaratsy
// export anelu png, sfg, ..., es tesankyunic jishta ed exporti masy lini arandzin class)
//sa ognum e nayev developerynery arandzin ashxatel orinak Canvasi bugi vra, myusy orinak nor logika e avelanum artahanel
// nayev SVG mek developer ashxatum e sra vra