//fonction doubler un tableau 
function doublerTableau(tableau:number[]){

    let tableauBis : number[] = []; 
    for (let index = 0; index < tableau.length; index++) {
        tableauBis[index] = tableau[index]*2;
        
        
    }
    return tableauBis;
}

export function exo3(){

    console.log("-----------------Exercice n°2---------------------------")
    let monTableau : number[] = [];
    for (let index = 0; index < 10; index++) {
        monTableau[index] = index+1;
        
    }
    console.log(monTableau);
    console.log("la taille de monTableau est : ", monTableau.length);
    console.log("1er élément de mon tableau est : ", monTableau[0]);
    console.log("dernier élément de mon tableau est : ", monTableau[monTableau.length -1]);
    console.log("le 4eme élément est : ", monTableau[3]);


    const tableauBis = doublerTableau(monTableau);
    console.log(tableauBis);
   
}