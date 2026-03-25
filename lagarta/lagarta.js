async function lagarta(){
    let lagarta = "( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )( )(0-_-0)";
    let espaco = " ";
    let lagarta2 = "()()()()()()()()()()()()()()()()()()()()()()()()(0-_-0)";
 
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
 
    for(let i = 0; i < 60; i++){
        lagarta = espaco + lagarta;
        lagarta2 = espaco + lagarta2;
        console.log(lagarta);
        await sleep (200);
        console.clear();
        console.log (lagarta2);
        await sleep (200);
        console.clear();
 
    }
}