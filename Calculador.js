function init(){

   var calculo = document.getElementById("calcular");
  

    //eventos

    calculo.onclick = function(){
        var monto = document.getElementById("monto")
        var cuotas = document.getElementById("cuotas");
        console.log(monto.value);
        console.log(cuotas.value);
        calcular(monto,cuotas)
        //console.log(cuotas.value());
        

    }


    //funciones 
    
    function calcular(monto,cuotas){
        var total ;

        if(monto = 3000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "1599,90"
                console.log("paso");
                total = 3199,80

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