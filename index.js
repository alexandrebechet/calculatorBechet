var calcul = "";

function lecture(fct){
    if(fct == "AC"){
        calcul=""; // on efface
    }
    else if(fct == "PI"){
        calcul = calcul + Math.PI;
    }
    else if(fct == "x!"){
        calcul = eval(calcul);

        var i, f;
        var num = calcul;
        f = 1
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        calcul = f;
    }
    else if(fct == "sin"){
        calcul = eval(calcul);
        calcul = Math.sin(calcul);
    }
    else if(fct == "cos"){
        calcul = eval(calcul);
        calcul = Math.cos(calcul);
    }
    else if(fct == "ln"){
        calcul = eval(calcul);
        calcul = Math.ln(calcul);
    }
    else if(fct == "log"){
        calcul = eval(calcul);
        calcul = Math.log(calcul);
    }
    else if(fct == "tan"){
        calcul = eval(calcul);
        calcul = Math.tan(calcul);
    }
    else if(fct == "sqrt"){
        calcul = eval(calcul);
        calcul = Math.sqrt(calcul, 2);
    }
    else if(fct == "EXP"){
        calcul = eval(calcul);
        calcul = Math.exp(calcul);
    }
    else if(fct == "^"){
        calcul = eval(calcul);
        calcul = Math.pow(calcul,2);
    }
    else if(fct == "="){
        calcul = eval(calcul);
    }
    else{
        calcul = calcul + fct;
    }
    document.getElementById("calc").innerHTML = calcul;
}
