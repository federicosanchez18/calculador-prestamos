function init(){

    var monto= document.getElementById() ;
    var cuotas;
    var cuotaMensual;
    var montoTotal;
    var calculo = document.getElementById("calcular");

    //eventos

    calculo.onclick = function(){
        calcular(monto,cuotas)

    }


    //funciones 
    
    function calcular(monto , cuotas){

        if(monto = 3000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").value ="1599,90"
                console.log("paso");
                //total 3199,80

            }
            if(cuotas = 3 ){
                //cuota 1099,90
                //total 3299,70
            }
            if(cuotas = 4 ){
                //cuota 849,90
            }
            if(cuotas = 5 ){
                
            }
            if(cuotas = 6 ){
                
            }
            if(cuotas = 8 ){
                
            }
            if(cuotas = 10 ){
                
            }
            
            if(cuotas = 12 ){
                
            }
            
            
            
        

    }
}
}