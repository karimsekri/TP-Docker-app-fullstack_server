"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo2 = void 0;
function exo2() {
    //Var
    let a = 5;
    let b = 1;
    //const
    const pi = Math.PI;
    function superieurPI(x, y) {
        if (x > pi) {
            console.log("a est superieur à PI");
        }
        else {
            console.log("a est inferieur ou egal  à PI");
        }
        if (y > pi) {
            console.log("b est superieur à PI");
        }
        else {
            console.log("b est inferieur  à PI");
        }
    }
    function compareValue(x, y) {
        console.log(x > y ? 'a superieur à b' : 'b est superieur à a ');
    }
    superieurPI(a, b);
    compareValue(a, b);
}
exports.exo2 = exo2;
;
