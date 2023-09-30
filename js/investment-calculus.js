// Declaring variables
const btnCalc = document.getElementById("btnCalc"),
    btnClear = document.getElementById("btnClear");
var capital = document.getElementById("invest-value"),
    prazo = document.getElementById("invest-value-time"), 
    juros = document.getElementById("invest-value-fees"), 
    aporte = document.getElementById("invest-value-monthly"),
    prazoTipo="m", 
    jurosTipo="m", 
    jurosMes=juros, 
    retorno = capital;


function limpaCampos(){
    document.getElementById("invest-value-monthly").value = ''
    document.getElementById("invest-value").value = ''
    document.getElementById("invest-value-time").value = ''
    document.getElementById("invest-value-fees").value = ''
    document.getElementById("invest-value-time-options").value = 'y'
    document.getElementById("invest-value-fees-options").value = 'y'
}
    

//EVENT Mouse Pointer  down
btnCalc.addEventListener("mouseup", function (){

    // retorno esperado do investimento com aporte
    function CalcInvest (retorno, prazo,jurosMes){
        for(let ix = 0; ix <prazo; ix++){
            retorno +=  ((retorno +aporte ) * jurosMes)
            console.log(retorno)
        }
    }

    // Formatting
    function Format(){
        //Data
        if(prazoTipo != "m")
            prazo*= 12

        // Type interest -- MONTHLY -- YEARLY
        if(jurosTipo != "m")
            jurosMes = juros ** (1/12)
        else
            jurosMes = juros
    }

    /*if((capital > 0 || aporte >0) && (juros > 0 && prazo > 0)){
        
    }

    })*/
    return console.log("sem erro")
}); // FIM DO EVENTO CALCULAR INVESTIMENTO
