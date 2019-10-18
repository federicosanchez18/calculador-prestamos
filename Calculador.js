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
        

        if(monto = 3000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "1599,90"
                documen.getElementById("montoTotal").innerHTML= "3199,80"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "1099,90"
                documen.getElementById("montoTotal").innerHTML= "3299,70"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "849,90"
                documen.getElementById("montoTotal").innerHTML= "3399,60"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "699,90"
                documen.getElementById("montoTotal").innerHTML= "3499,50 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "599,90"
                documen.getElementById("montoTotal").innerHTML=  "3599,40"
                
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "474,90"
                documen.getElementById("montoTotal").innerHTML= "3799,20"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "399,90"
                documen.getElementById("montoTotal").innerHTML= "3999,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "349,90"
                documen.getElementById("montoTotal").innerHTML= "4198,80"    
            }
        }
        if(monto = 4000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "2133,20"
                documen.getElementById("montoTotal").innerHTML= "4266,40"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "1466,53"
                documen.getElementById("montoTotal").innerHTML= "4399,60"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "1133,20"
                documen.getElementById("montoTotal").innerHTML= "4532,80"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "933,20"
                documen.getElementById("montoTotal").innerHTML= "4666,00 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "799,87"
                documen.getElementById("montoTotal").innerHTML=  "4799,20"
                
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "633,20"
                documen.getElementById("montoTotal").innerHTML= "5065,60"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "533,20"
                documen.getElementById("montoTotal").innerHTML= "5332,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "466,53"
                documen.getElementById("montoTotal").innerHTML= "5598,40"    
            }
        }
    
        if(monto = 5000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "2666,50"
                documen.getElementById("montoTotal").innerHTML= "5333,00"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "1833,17"
                document.getElementById("montoTotal").innerHTML= "5499,50"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "1416,50"
                document.getElementById("montoTotal").innerHTML= "5666,00"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "1166,50"
                document.getElementById("montoTotal").innerHTML= "5832,50 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "999,83"
                document.getElementById("montoTotal").innerHTML=  "5999,00"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "791,50"
                document.getElementById("montoTotal").innerHTML= "6332,00"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "666,50"
                document.getElementById("montoTotal").innerHTML= "6665,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "583,17"
                document.getElementById("montoTotal").innerHTML= "6998,00"    
            }
        }
        if(monto = 6000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "3199,80"
                document.getElementById("montoTotal").innerHTML= "6399,60"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "2199,80"
                document.getElementById("montoTotal").innerHTML= "6599,40"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "1699,80"
                document.getElementById("montoTotal").innerHTML= "6799,20"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "1399,80"
                document.getElementById("montoTotal").innerHTML= "6999,00 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1199,80"
                document.getElementById("montoTotal").innerHTML=  "7198,80"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "949,80"
                document.getElementById("montoTotal").innerHTML= "7598,40"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "799,80"
                document.getElementById("montoTotal").innerHTML= "7998,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "699,80"
                document.getElementById("montoTotal").innerHTML= "8397,60"    
            }
        }
        if(monto = 7000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "3733,10"
                document.getElementById("montoTotal").innerHTML= "7466,20"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "2566,43"
                document.getElementById("montoTotal").innerHTML= "7699,30"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "1983,10"
                document.getElementById("montoTotal").innerHTML= "7932,40"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "1633,10"
                document.getElementById("montoTotal").innerHTML= "8165,50 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1399,77"
                document.getElementById("montoTotal").innerHTML=  "8398,60"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1108,10"
                document.getElementById("montoTotal").innerHTML= "8864,80"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "933,10"
                document.getElementById("montoTotal").innerHTML= "9331,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "816,43"
                document.getElementById("montoTotal").innerHTML= "9797,20"    
            }
        }
        if(monto = 8000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "4266,40"
                document.getElementById("montoTotal").innerHTML= "8532,80"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "2933,07"
                document.getElementById("montoTotal").innerHTML= "8799,20"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "2266,40"
                document.getElementById("montoTotal").innerHTML= "9065,60"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "1866,40"
                document.getElementById("montoTotal").innerHTML= "9332,00 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1599,73"
                document.getElementById("montoTotal").innerHTML=  "9598,40"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1266,40"
                document.getElementById("montoTotal").innerHTML= "10131,20"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1066,40"
                document.getElementById("montoTotal").innerHTML= "10664,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "933,07"
                document.getElementById("montoTotal").innerHTML= "11196,80"    
            }
        }
        if(monto = 9000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "4799,70"
                document.getElementById("montoTotal").innerHTML= "9599,40"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "3299,70"
                document.getElementById("montoTotal").innerHTML= "9899,10"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = ""
                document.getElementById("montoTotal").innerHTML= ""
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "2099,70"
                document.getElementById("montoTotal").innerHTML= "10498,50"
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1799,70"
                document.getElementById("montoTotal").innerHTML=  "10798,20"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1424,70"
                document.getElementById("montoTotal").innerHTML= "11,397,60"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1199,70"
                document.getElementById("montoTotal").innerHTML= "11997,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "1049,70"
                document.getElementById("montoTotal").innerHTML= "12596,40"    
            }
        }
        if(monto = 10000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "5333,00"
                document.getElementById("montoTotal").innerHTML= "10666,00"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "3666,33"
                document.getElementById("montoTotal").innerHTML= "10999,00"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "2833,00"
                document.getElementById("montoTotal").innerHTML= "11332,00"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "2333,00"
                document.getElementById("montoTotal").innerHTML= "11665,00 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1999,67"
                document.getElementById("montoTotal").innerHTML=  "11998,00"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1583,00"
                document.getElementById("montoTotal").innerHTML= "12664,00"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1333,00"
                document.getElementById("montoTotal").innerHTML= "13333,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "1166,33"
                document.getElementById("montoTotal").innerHTML= "13996,00"    
            }
        }
        if(monto = 11000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "5866,30"
                document.getElementById("montoTotal").innerHTML= "11732,60"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "4032,97"
                document.getElementById("montoTotal").innerHTML= "12098,90"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "3116,30"
                document.getElementById("montoTotal").innerHTML= "12465,20"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "2566,30"
                document.getElementById("montoTotal").innerHTML= "12831,50"
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "2199,63"
                document.getElementById("montoTotal").innerHTML=  "13197,80"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1741,30"
                document.getElementById("montoTotal").innerHTML= "13930,40"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1466,30"
                document.getElementById("montoTotal").innerHTML= "14663,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "1282,97"
                document.getElementById("montoTotal").innerHTML= "15395,60"    
            }
        }
        if(monto = 12000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "6399,60"
                document.getElementById("montoTotal").innerHTML= "12799,20"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "4399,60"
                document.getElementById("montoTotal").innerHTML= "13198,80"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "3399,60"
                document.getElementById("montoTotal").innerHTML= "13598,40"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "2799,60"
                document.getElementById("montoTotal").innerHTML= "13998,00"
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "2399,60"
                document.getElementById("montoTotal").innerHTML=  "14397,60"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1899,60"
                document.getElementById("montoTotal").innerHTML= "15196,80"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1599,60"
                document.getElementById("montoTotal").innerHTML= "15996,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "1399,60"
                document.getElementById("montoTotal").innerHTML= "16795,20"    
            }
        }
        if(monto = 13000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "6932,90"
                document.getElementById("montoTotal").innerHTML= "13865,80"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "4766,23"
                document.getElementById("montoTotal").innerHTML= "14298,70"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "3682,90"
                document.getElementById("montoTotal").innerHTML= "14731,60"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "3032,90"
                document.getElementById("montoTotal").innerHTML= "15164,50"
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "2599,57"
                document.getElementById("montoTotal").innerHTML=  "15597,40"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "2057,90"
                document.getElementById("montoTotal").innerHTML= "16463,20"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "1732,90"
                document.getElementById("montoTotal").innerHTML= "17329,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "1516,23"
                document.getElementById("montoTotal").innerHTML= "18194,80"    
            }
        }
        if(monto = 14000){
            if(cuotas = 2 ){
                document.getElementById("vcuotas").innerHTML = "3733,10"
                document.getElementById("montoTotal").innerHTML= "7466,20"
            }
            if(cuotas = 3 ){
                document.getElementById("vcuotas").innerHTML = "2566,43"
                document.getElementById("montoTotal").innerHTML= "7699,30"
            }
            if(cuotas = 4 ){
                document.getElementById("vcuotas").innerHTML = "1983,10"
                document.getElementById("montoTotal").innerHTML= "7932,40"
            }
            if(cuotas = 5 ){
                document.getElementById("vcuotas").innerHTML = "1633,10"
                document.getElementById("montoTotal").innerHTML= "8165,50 "
            }
            if(cuotas = 6 ){
                document.getElementById("vcuotas").innerHTML = "1399,77"
                document.getElementById("montoTotal").innerHTML=  "8398,60"
            }
            if(cuotas = 8 ){
                document.getElementById("vcuotas").innerHTML = "1108,10"
                document.getElementById("montoTotal").innerHTML= "8864,80"
            }
            if(cuotas = 10 ){
                document.getElementById("vcuotas").innerHTML = "933,10"
                document.getElementById("montoTotal").innerHTML= "9331,00"
            }
            if(cuotas = 12 ){
                document.getElementById("vcuotas").innerHTML = "816,43"
                document.getElementById("montoTotal").innerHTML= "9797,20"    
            }
        }    
}
}