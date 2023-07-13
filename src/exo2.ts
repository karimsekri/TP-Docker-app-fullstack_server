
export function exo2(){

    //Var
    let a : number = 5 ;
    let b : number = 1 ;

    //const
    const pi = Math.PI ;

    function superieurPI(x: number, y: number)
    {   
        //TODO Utiliser les ternaire
    
        if (x > pi) {
            console.log("a est superieur à PI");
        }
        else
        {
            console.log("a est inferieur ou egal  à PI");
        }

        if (y > pi) {
            console.log("b est superieur à PI");
        }
        else
        {
            console.log("b est inferieur  à PI");
        }
    }

    function compareValue(x:number, y:number) {
       console.log(x>y ? 'a superieur à b' :'b est superieur à a ') ;
    }

    superieurPI(a,b);
    compareValue(a,b);
};
