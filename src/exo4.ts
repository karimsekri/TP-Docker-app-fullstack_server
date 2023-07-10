function calculDureeStock(stockFoin: number, consoJourMouton : number, jourTransformation : number, nombreMouton : number )
{
    let stock : number = stockFoin ;
    let nbreDeJourConso : number = 0;
    while (stock > 0) {
        stock = stock - consoJourMouton*nombreMouton
        if (nbreDeJourConso === 999) {
            nombreMouton--;
        }
        nbreDeJourConso++ ;

    }

    return  nbreDeJourConso ;
    
}

export function exo4(){
    console.log("-----------------Exercice n°3---------------------------")

    const STOCK_FOIN : number = 800;
    const CONSO_JOUR_PAR_MOUTON : number  = 0.25;
    const JOUR_TRANSFORMATION : number = 1000;

    let dureeStock = calculDureeStock(STOCK_FOIN, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 2 );
    let dureeStock20kg = calculDureeStock(20, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 2 );
    let moutons5 = calculDureeStock(STOCK_FOIN, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 5 );


    console.log("Le stock va durer  ", dureeStock, "  jours");

    console.log("pour 20 kg  et 2 moutons");
    console.log("Le stock va durer  ", dureeStock20kg, "  jours");

    console.log("pour 800 kg  et 5 moutons");
    console.log("Le stock va durer  ", moutons5, "  jours");

}