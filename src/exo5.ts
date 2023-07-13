import { Console } from "console";

function ditribuerVoteAleatoirement(nombreDeVote : number, nombreDeCondidat : number ){
   let  tableauVote : number[]=[];
   for (let index = 0; index < nombreDeCondidat; index++) {
         tableauVote.push(0) ;
    
   }

   console.log(tableauVote)

   for (let index = 0; index < nombreDeVote; index++) {

        let randomPosition = Math.floor(Math.random()*(nombreDeCondidat));
        tableauVote[randomPosition]++;
             
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
    const NOMBRE_DE_CONDIDAT : number = CANDIDATS.length;
    const NOMBRE_DE_VOTE = 1000;

    let votes :  number [] ;
    let candidat_gagnant:  {
        nomDuCandidat: string;
        indexVoteMax: number;
        voteMax: number;
    };
    let deuxieme_candidat_gagnant;
   
   

    votes = ditribuerVoteAleatoirement(NOMBRE_DE_VOTE, NOMBRE_DE_CONDIDAT);
       
    console.log("Liste des candidats: ", CANDIDATS)
    console.log("Resultat du vote : ",votes);   

    candidat_gagnant = trouverLeCandidatGagnant(votes, CANDIDATS);
    console.log("le nom du candidat qui a le plus de votes est : ",candidat_gagnant);


    let votes_deuxieme_tour = votes.filter((valeur, index) => votes[index] != candidat_gagnant.voteMax)
    console.log("votes_deuxieme_tour : ", votes_deuxieme_tour);
    let candidats_deuxieme_tour = CANDIDATS.filter( (nom, index) => votes[index] != candidat_gagnant.voteMax);
    console.log ("la liste des candidats qui passent au deuxième tour sont :  ", candidats_deuxieme_tour);


    deuxieme_candidat_gagnant = trouverLeCandidatGagnant(votes_deuxieme_tour,candidats_deuxieme_tour );
    console.log("nom du candidat n°2 :  ", deuxieme_candidat_gagnant);

    console.log();
    console.log("                    ------------Question 2 --------------------------------                  ");
    console.log();

    

    let tableau_des_gagnants = [candidat_gagnant,deuxieme_candidat_gagnant];

    console.log("les candidats qui passent au 2eme tour  sont : ");
    tableau_des_gagnants.forEach(element => {console.log(element)});    

   // const LEPEIGNE = tableau_des_gagnants.find(element=> element.nomDuCandidat === "lepeigne");
   // console.log("LEPEIGNE : ", LEPEIGNE);

    
    
    
}   
