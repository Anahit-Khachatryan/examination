class Vehicle2 {
    location: {x: number, y: number} = {x: 0, y: 0}
    gaz!: number;

    move(x: number, y: number) {
       this.location = {x, y};
       this.gaz--;
    }
}


class Animal1 extends Vehicle2 {
    // location: {x: number, y: number} = {x: 0, y: 0}

    // move(x: number, y: number) {
    //    this.location = {x, y};
    // }
    //estegh xndira extends move er kani vor extend areci bayc orinak uni gaz vehicle , u lriv logikan xarnvuma u gnalov ay xndiry kara tsanrana - inheritance is a relationship ay es skzbunky xarnecink
}

class Car2 extends Vehicle2 {
    maker!: 'Mercedez' | 'BMW'
    //inheritance eghats classy irenic nerkayacnum e entabazmutyun umic vor jarangel e
}



//vortegh petk chi kirarel
//inhericance-y erb  mi object kam class myusic jarangum enk
// ete asum enk mi class extends e eghel myusic uremn ed classi tesak e - inheritance is a relationship
//inheritance best practice chi hamarvum - erb inherite enk anum menak ete aveli lav dzev chka anelu
//
