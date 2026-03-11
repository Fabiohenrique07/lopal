function calculadora(){
    while(true){
    let resultado = 0.0;
    let operador1;
    let operador2;
    let operador;
 
    operador1 = parseFloat( prompt("Digite o primeiro número: ") );
    operador2 = parseFloat( prompt("Digite o segundo número: ") )
    operador = prompt("Digite uma das operações ( + - * / ): ");
 
    if (operador === "+"){
        resultado = operador1 + operador2;
    } else if ( operador === "-" ){
        resultado = operador1 - operador2;
    } else if ( operador === "*"){
        resultado = operando1 * operando2;
    } else if (operador === "/" ){
        if (operador2 == "/" ){
            alert("não e possivel dividir por zero.")
        return
        }
        alert("operador inválido!");
        return
    }
 
    alert("Resultado: " +
        operador1 + " " + operador + " " + operador2 + " = " + resultado);
    }
}
 