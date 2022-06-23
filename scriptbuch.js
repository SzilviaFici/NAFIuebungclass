class Buch{
    BuchVerfuegung = false
    BuchVerkauft = false
    Genre
    Erscheinungsjahr
    Autor
    Preis
    Exemplar


    constructor(Genre,Erscheinungsjahr, Autor, Preis,Anzahl){
        this.Genre = Genre
        this.Erscheinungsjahr = Erscheinungsjahr
        this.Autor = Autor
        this.Preis = Preis
        this.Exemplar = Anzahl
    }


    verfuegbar() {
    if (this.Exemplar>0) {
        console.log("Buch steht zu Verfügung")
    }else{
        console.log("Buch steht nicht zu Verfügung")
    }
    }
//Test
    verkauft() {
        if (this.Exemplar-1) {
            console.log("Buch wurde verkauft")
    }else{
    console.log("Das Buch wurde nicht verkauft")
    }
}
}

// helloooooo