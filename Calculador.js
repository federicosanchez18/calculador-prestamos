function init() {

    var calculo = document.getElementById("calcular");
    var restart = document.getElementById("restart");

    //eventos

    calculo.onclick = function () {
        var montoselect = document.getElementById("monto");
        var cuotaselect = document.getElementById("cuotas");
        var monto = montoselect.value;
        var cuotas = cuotaselect.value;
        calcular(monto,cuotas)



    }

    restart.onclick = function () {
        restablecer();
    }


    //funciones

    function restablecer() {
        document.getElementById("vcuotas").innerHTML = "";
        document.getElementById("montoTotal").innerHTML = "";
    }

    function calcular(monto,cuotas) {

        console.log(monto);

        if (monto == 3000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "1599,90"
                document.getElementById("montoTotal").innerHTML = "3199,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "1099,90"
                document.getElementById("montoTotal").innerHTML = "3299,70"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "849,90"
                document.getElementById("montoTotal").innerHTML = "3399,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "699,90"
                document.getElementById("montoTotal").innerHTML = "3499,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "599,90"
                document.getElementById("montoTotal").innerHTML = "3599,40"

            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "474,90"
                document.getElementById("montoTotal").innerHTML = "3799,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "399,90"
                document.getElementById("montoTotal").innerHTML = "3999,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "349,90"
                document.getElementById("montoTotal").innerHTML = "4198,80"
            }
        }
        if (monto == 4000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "2133,20"
                document.getElementById("montoTotal").innerHTML = "4266,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "1466,53"
                document.getElementById("montoTotal").innerHTML = "4399,60"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "1133,20"
                document.getElementById("montoTotal").innerHTML = "4532,80"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "933,20"
                document.getElementById("montoTotal").innerHTML = "4666,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "799,87"
                document.getElementById("montoTotal").innerHTML = "4799,20"

            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "633,20"
                document.getElementById("montoTotal").innerHTML = "5065,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "533,20"
                document.getElementById("montoTotal").innerHTML = "5332,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "466,53"
                document.getElementById("montoTotal").innerHTML = "5598,40"
            }
        }

        if (monto == 5000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "2666,50"
                document.getElementById("montoTotal").innerHTML = "5333,00"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "1833,17"
                document.getElementById("montoTotal").innerHTML = "5499,50"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "1416,50"
                document.getElementById("montoTotal").innerHTML = "5666,00"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "1166,50"
                document.getElementById("montoTotal").innerHTML = "5832,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "999,83"
                document.getElementById("montoTotal").innerHTML = "5999,00"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "791,50"
                document.getElementById("montoTotal").innerHTML = "6332,00"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "666,50"
                document.getElementById("montoTotal").innerHTML = "6665,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "583,17"
                document.getElementById("montoTotal").innerHTML = "6998,00"
            }
        }
        if (monto == 6000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "3199,80"
                document.getElementById("montoTotal").innerHTML = "6399,60"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "2199,80"
                document.getElementById("montoTotal").innerHTML = "6599,40"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "1699,80"
                document.getElementById("montoTotal").innerHTML = "6799,20"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "1399,80"
                document.getElementById("montoTotal").innerHTML = "6999,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "1199,80"
                document.getElementById("montoTotal").innerHTML = "7198,80"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "949,80"
                document.getElementById("montoTotal").innerHTML = "7598,40"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "799,80"
                document.getElementById("montoTotal").innerHTML = "7998,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "699,80"
                document.getElementById("montoTotal").innerHTML = "8397,60"
            }
        }
        if (monto == 7000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "3733,10"
                document.getElementById("montoTotal").innerHTML = "7466,20"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "2566,43"
                document.getElementById("montoTotal").innerHTML = "7699,30"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "1983,10"
                document.getElementById("montoTotal").innerHTML = "7932,40"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "1633,10"
                document.getElementById("montoTotal").innerHTML = "8165,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "1399,77"
                document.getElementById("montoTotal").innerHTML = "8398,60"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1108,10"
                document.getElementById("montoTotal").innerHTML = "8864,80"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "933,10"
                document.getElementById("montoTotal").innerHTML = "9331,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "816,43"
                document.getElementById("montoTotal").innerHTML = "9797,20"
            }
        }
        if (monto == 8000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "4266,40"
                document.getElementById("montoTotal").innerHTML = "8532,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "2933,07"
                document.getElementById("montoTotal").innerHTML = "8799,20"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "2266,40"
                document.getElementById("montoTotal").innerHTML = "9065,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "1866,40"
                document.getElementById("montoTotal").innerHTML = "9332,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "1599,73"
                document.getElementById("montoTotal").innerHTML = "9598,40"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1266,40"
                document.getElementById("montoTotal").innerHTML = "10131,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1066,40"
                document.getElementById("montoTotal").innerHTML = "10664,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "933,07"
                document.getElementById("montoTotal").innerHTML = "11196,80"
            }
        }
        if (monto == 9000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "4799,70"
                document.getElementById("montoTotal").innerHTML = "9599,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "3299,70"
                document.getElementById("montoTotal").innerHTML = "9899,10"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = ""
                document.getElementById("montoTotal").innerHTML = ""
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "2099,70"
                document.getElementById("montoTotal").innerHTML = "10498,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "1799,70"
                document.getElementById("montoTotal").innerHTML = "10798,20"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1424,70"
                document.getElementById("montoTotal").innerHTML = "11,397,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1199,70"
                document.getElementById("montoTotal").innerHTML = "11997,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1049,70"
                document.getElementById("montoTotal").innerHTML = "12596,40"
            }
        }
        if (monto == 10000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "5333,00"
                document.getElementById("montoTotal").innerHTML = "10666,00"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "3666,33"
                document.getElementById("montoTotal").innerHTML = "10999,00"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "2833,00"
                document.getElementById("montoTotal").innerHTML = "11332,00"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "2333,00"
                document.getElementById("montoTotal").innerHTML = "11665,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "1999,67"
                document.getElementById("montoTotal").innerHTML = "11998,00"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1583,00"
                document.getElementById("montoTotal").innerHTML = "12664,00"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1333,00"
                document.getElementById("montoTotal").innerHTML = "13333,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1166,33"
                document.getElementById("montoTotal").innerHTML = "13996,00"
            }
        }
        if (monto == 11000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "5866,30"
                document.getElementById("montoTotal").innerHTML = "11732,60"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "4032,97"
                document.getElementById("montoTotal").innerHTML = "12098,90"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "3116,30"
                document.getElementById("montoTotal").innerHTML = "12465,20"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "2566,30"
                document.getElementById("montoTotal").innerHTML = "12831,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "2199,63"
                document.getElementById("montoTotal").innerHTML = "13197,80"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1741,30"
                document.getElementById("montoTotal").innerHTML = "13930,40"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1466,30"
                document.getElementById("montoTotal").innerHTML = "14663,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1282,97"
                document.getElementById("montoTotal").innerHTML = "15395,60"
            }
        }
        if (monto == 12000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "6399,60"
                document.getElementById("montoTotal").innerHTML = "12799,20"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "4399,60"
                document.getElementById("montoTotal").innerHTML = "13198,80"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "3399,60"
                document.getElementById("montoTotal").innerHTML = "13598,40"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "2799,60"
                document.getElementById("montoTotal").innerHTML = "13998,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "2399,60"
                document.getElementById("montoTotal").innerHTML = "14397,60"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1899,60"
                document.getElementById("montoTotal").innerHTML = "15196,80"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1599,60"
                document.getElementById("montoTotal").innerHTML = "15996,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1399,60"
                document.getElementById("montoTotal").innerHTML = "16795,20"
            }
        }
        if (monto == 13000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "6932,90"
                document.getElementById("montoTotal").innerHTML = "13865,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "4766,23"
                document.getElementById("montoTotal").innerHTML = "14298,70"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "3682,90"
                document.getElementById("montoTotal").innerHTML = "14731,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "3032,90"
                document.getElementById("montoTotal").innerHTML = "15164,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "2599,57"
                document.getElementById("montoTotal").innerHTML = "15597,40"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "2057,90"
                document.getElementById("montoTotal").innerHTML = "16463,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1732,90"
                document.getElementById("montoTotal").innerHTML = "17329,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1516,23"
                document.getElementById("montoTotal").innerHTML = "18194,80"
            }
        }
        if (monto == 14000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "7466,20"
                document.getElementById("montoTotal").innerHTML = "14932,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "5132,87"
                document.getElementById("montoTotal").innerHTML = "15398,60"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "3966,20"
                document.getElementById("montoTotal").innerHTML = "15864,80"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "3266,20"
                document.getElementById("montoTotal").innerHTML = "16331,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "2799,53"
                document.getElementById("montoTotal").innerHTML = "16797,20"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "2216,20"
                document.getElementById("montoTotal").innerHTML = "17729,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1866,20"
                document.getElementById("montoTotal").innerHTML = "18662,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1632,87"
                document.getElementById("montoTotal").innerHTML = "19594,40"
            }
        }
        if (monto == 16000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "8532,80"
                document.getElementById("montoTotal").innerHTML = "17065,60"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "5866,13"
                document.getElementById("montoTotal").innerHTML = "17598,40"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "4532,80"
                document.getElementById("montoTotal").innerHTML = "18131,20"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "3732,80"
                document.getElementById("montoTotal").innerHTML = "18664,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "3199,47"
                document.getElementById("montoTotal").innerHTML = "19196,80"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "2532,80"
                document.getElementById("montoTotal").innerHTML = "20262,40"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2132,80"
                document.getElementById("montoTotal").innerHTML = "21328,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1866,13"
                document.getElementById("montoTotal").innerHTML = "22393,60"
            }
        }
        if (monto == 18000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "9599,40"
                document.getElementById("montoTotal").innerHTML = "19198,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "6599,40"
                document.getElementById("montoTotal").innerHTML = "19798,20"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "5099,40"
                document.getElementById("montoTotal").innerHTML = "20397,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "4199,10"
                document.getElementById("montoTotal").innerHTML = "20997,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "3599,40"
                document.getElementById("montoTotal").innerHTML = "21596,40"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "2849,40"
                document.getElementById("montoTotal").innerHTML = "22795,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2399,40"
                document.getElementById("montoTotal").innerHTML = "23994,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2099,40"
                document.getElementById("montoTotal").innerHTML = "25192,80"
            }
        }
        if (monto == 19000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "10132,70"
                document.getElementById("montoTotal").innerHTML = "20265,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "6966,03"
                document.getElementById("montoTotal").innerHTML = "20898,10"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "5382,70"
                document.getElementById("montoTotal").innerHTML = "21503,80"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "4432,70"
                document.getElementById("montoTotal").innerHTML = "22163,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "3799,37"
                document.getElementById("montoTotal").innerHTML = "22796,20"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3007,70"
                document.getElementById("montoTotal").innerHTML = "24061,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2532,70"
                document.getElementById("montoTotal").innerHTML = "25327,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2216,03"
                document.getElementById("montoTotal").innerHTML = "26592,40"
            }
        }
        if (monto == 20000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "10666,00"
                document.getElementById("montoTotal").innerHTML = "21332,00"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "7332,67"
                document.getElementById("montoTotal").innerHTML = "21998,00"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "5666,00"
                document.getElementById("montoTotal").innerHTML = "22664,00"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "4666,00"
                document.getElementById("montoTotal").innerHTML = "23330,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "3999,33"
                document.getElementById("montoTotal").innerHTML = "23996,00"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3166,00"
                document.getElementById("montoTotal").innerHTML = "25328,00"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2666,00"
                document.getElementById("montoTotal").innerHTML = "26660,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2332,67"
                document.getElementById("montoTotal").innerHTML = "27992,00"
            }
        }
        if (monto == 21000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "11199,30"
                document.getElementById("montoTotal").innerHTML = "22398,60"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "7699,30"
                document.getElementById("montoTotal").innerHTML = "23097,90"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "5949,30"
                document.getElementById("montoTotal").innerHTML = "23797,20"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "4899,30"
                document.getElementById("montoTotal").innerHTML = "24496,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4199,30"
                document.getElementById("montoTotal").innerHTML = "25195,80"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3149,48"
                document.getElementById("montoTotal").innerHTML = "26594,40"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2799,30"
                document.getElementById("montoTotal").innerHTML = "27993,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2449,30"
                document.getElementById("montoTotal").innerHTML = "29391,60"
            }
        }

        if (monto == 22000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "11732,60"
                document.getElementById("montoTotal").innerHTML = "23465,20"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "8065,93"
                document.getElementById("montoTotal").innerHTML = "24197,80"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "6232,60"
                document.getElementById("montoTotal").innerHTML = "24930,40"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "5132,60"
                document.getElementById("montoTotal").innerHTML = "25663,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4399,27"
                document.getElementById("montoTotal").innerHTML = "26395,60"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3482,60"
                document.getElementById("montoTotal").innerHTML = "27860,80"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2932,60"
                document.getElementById("montoTotal").innerHTML = "29326,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2565,93"
                document.getElementById("montoTotal").innerHTML = "30791,20"
            }
        }

        if (monto == 23000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "12265,90"
                document.getElementById("montoTotal").innerHTML = "24531,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "8432,57"
                document.getElementById("montoTotal").innerHTML = "25297,70"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "6515,90"
                document.getElementById("montoTotal").innerHTML = "26063,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "5365,90"
                document.getElementById("montoTotal").innerHTML = "26829,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4599,23"
                document.getElementById("montoTotal").innerHTML = "27595,40"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3640,90"
                document.getElementById("montoTotal").innerHTML = "29127,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3065,90"
                document.getElementById("montoTotal").innerHTML = "30659,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2682,57"
                document.getElementById("montoTotal").innerHTML = "32190,80"
            }
        }

        if (monto == 24000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "12799,20"
                document.getElementById("montoTotal").innerHTML = "25598,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "8799,20"
                document.getElementById("montoTotal").innerHTML = "26397,60"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "6799,20"
                document.getElementById("montoTotal").innerHTML = "27196,80"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "5599,20"
                document.getElementById("montoTotal").innerHTML = "27996,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4799,20"
                document.getElementById("montoTotal").innerHTML = "28795,20"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3799,20"
                document.getElementById("montoTotal").innerHTML = "30393,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3199,20"
                document.getElementById("montoTotal").innerHTML = "31992,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2799,20"
                document.getElementById("montoTotal").innerHTML = "33590,40"
            }
        }

        if (monto == 25000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "13332,50"
                document.getElementById("montoTotal").innerHTML = "26665,00"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "9165,83"
                document.getElementById("montoTotal").innerHTML = "27497,50"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "7082,50"
                document.getElementById("montoTotal").innerHTML = "28330,00"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "5832,50"
                document.getElementById("montoTotal").innerHTML = "29162,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4999,17"
                document.getElementById("montoTotal").innerHTML = "29995,00"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3957,50"
                document.getElementById("montoTotal").innerHTML = "31660,00"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3332,50"
                document.getElementById("montoTotal").innerHTML = "33325,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2915,83"
                document.getElementById("montoTotal").innerHTML = "34990,00"
            }
        }

        if (monto == 26000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "13865,80"
                document.getElementById("montoTotal").innerHTML = "27731,60"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "9532,47"
                document.getElementById("montoTotal").innerHTML = "28597,40"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "7365,80"
                document.getElementById("montoTotal").innerHTML = "29463,20"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "6065,80"
                document.getElementById("montoTotal").innerHTML = "30329,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "5199,13"
                document.getElementById("montoTotal").innerHTML = "31194,80"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4115,80"
                document.getElementById("montoTotal").innerHTML = "32926,40"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3465,80"
                document.getElementById("montoTotal").innerHTML = "34658,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3032,47"
                document.getElementById("montoTotal").innerHTML = "36389,60"
            }
        }

        if (monto == 27000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "14399,10"
                document.getElementById("montoTotal").innerHTML = "28798,20"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "9899,10"
                document.getElementById("montoTotal").innerHTML = "29697,30"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "7649,10"
                document.getElementById("montoTotal").innerHTML = "30596,40"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "6299,10"
                document.getElementById("montoTotal").innerHTML = "31495,50 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "5399,10"
                document.getElementById("montoTotal").innerHTML = "32394,60"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4274,10"
                document.getElementById("montoTotal").innerHTML = "34192,80"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3599,10"
                document.getElementById("montoTotal").innerHTML = "35991,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3149,10"
                document.getElementById("montoTotal").innerHTML = "37789,20"
            }
        }

        if (monto == 28000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "14932,40"
                document.getElementById("montoTotal").innerHTML = "29864,80"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "10265,73"
                document.getElementById("montoTotal").innerHTML = "30797,20"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "7932,40"
                document.getElementById("montoTotal").innerHTML = "31729,60"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "6532,40"
                document.getElementById("montoTotal").innerHTML = "32662,00 "
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "5599,07"
                document.getElementById("montoTotal").innerHTML = "33594,40"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4432,40"
                document.getElementById("montoTotal").innerHTML = "35459,20"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3732,40"
                document.getElementById("montoTotal").innerHTML = "37324,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3265,73"
                document.getElementById("montoTotal").innerHTML = "39188,80"
            }
        }
        ;
        if (monto == 29000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "15465,70"
                document.getElementById("montoTotal").innerHTML = "30931,40"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "10632,37"
                document.getElementById("montoTotal").innerHTML = "31891,10"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "8215,70"
                document.getElementById("montoTotal").innerHTML = "32862,80"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "6765,70"
                document.getElementById("montoTotal").innerHTML = "33828,50"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "5799,03"
                document.getElementById("montoTotal").innerHTML = "34794,20"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4590,70"
                document.getElementById("montoTotal").innerHTML = "36725,60"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3865,70"
                document.getElementById("montoTotal").innerHTML = "38657,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3382,37"
                document.getElementById("montoTotal").innerHTML = "40588,40"
            }
        }

        if (monto == 30000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "15999,00"
                document.getElementById("montoTotal").innerHTML = "37998,00"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "10999,00"
                document.getElementById("montoTotal").innerHTML = "32997,00"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "8499,00"
                document.getElementById("montoTotal").innerHTML = "33996,00"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "6999,00"
                document.getElementById("montoTotal").innerHTML = "34995,00"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "5999,00"
                document.getElementById("montoTotal").innerHTML = "35994,00"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4749,00"
                document.getElementById("montoTotal").innerHTML = "37992,00"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "3999,00"
                document.getElementById("montoTotal").innerHTML = "39990,00"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3499,00"
                document.getElementById("montoTotal").innerHTML = "41988,00"
            }
        }
    }
}