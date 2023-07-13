function ditribuerVoteAleatoirement(nombreDeVote : number, nombreDeCondidat : number ){
   let  tableauVote : number[] = [];

        for (let index = 0; index < nombreDeCondidat; index++) {

           tableauVote[index] = Math.random()*(nombreDeVote);
           tableauVote[index] = Math.round(tableauVote[index]);

           nombreDeVote = nombreDeVote - tableauVote[index] ;
        }

    return tableauVote;
}

function trouverLeCandidatGagnant(vote : number[], candidats : string[]) {
    let nomDuCandidat : string = '';
    let voteMax = Math.max(...vote);
    let indexVoteMax =  vote.indexOf(Math.max(...vote));
    nomDuCandidat = candidats[indexVoteMax];

   // console.log("voteMax",voteMax);
   // console.log("indexVoteMax",vote.indexOf(voteMax));
    //console.log(candidat);

    return {nomDuCandidat ,indexVoteMax ,voteMax };
}



export function exo5(){
    console.log("-----------------Exercice n°4---------------------------")

    const CANDIDATS = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    const NOMBRE_DE_CONDIDAT : number = 7;
    const NOMBRE_DE_VOTE = 1000;

    let vote = [];
    let candidat_gagnant, deuxieme_candidat_gagnant;
   
   

    vote = ditribuerVoteAleatoirement(NOMBRE_DE_VOTE, NOMBRE_DE_CONDIDAT);
    candidat_gagnant = trouverLeCandidatGagnant(vote, CANDIDATS);

    // const MAP_TABLEAU_VOTE = vote.map(
    //     vote.splice(candidat_gagnant.indexVoteMax,1);
        
    // );

   
    
    console.log("Liste des candidats: ", CANDIDATS)
    console.log("Resultat du vote : ",vote);   
    console.log("le nom du candidat qui a le plus de votes est : ",candidat_gagnant);

    vote.splice(candidat_gagnant.indexVoteMax,1)
    console.log ("la liste des candidats qui passent au deuxième tour sont :  ", vote);

    CANDIDATS.splice(candidat_gagnant.indexVoteMax,1)
    deuxieme_candidat_gagnant = trouverLeCandidatGagnant(vote,CANDIDATS );
    console.log("nom du candidat n°2 :  ", deuxieme_candidat_gagnant);

    console.log();
    console.log("                    ------------Question 2 --------------------------------                  ");
    console.log();

    let tableau_des_gagnants = [candidat_gagnant,deuxieme_candidat_gagnant];

    if (candidat_gagnant.nomDuCandidat === "lepeigne" || deuxieme_candidat_gagnant.nomDuCandidat === "lepeigne" ) {
        
        //recuperer le résultat de lepeigne
        console.log(tableau_des_gagnants);

    }
    else
    {
        console.log("lepeigne n'a pas gagné");
    }
   

}   
