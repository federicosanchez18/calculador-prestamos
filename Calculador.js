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

        if (monto == 10000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "5.375"
                document.getElementById("montoTotal").innerHTML = "10.750"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "3.708,33"
                document.getElementById("montoTotal").innerHTML = "11.124"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "2.875,00"
                document.getElementById("montoTotal").innerHTML = "11.500"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "2.375,00"
                document.getElementById("montoTotal").innerHTML = "11.875"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "2.041,67"
                document.getElementById("montoTotal").innerHTML = "12.250"

            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "1.625,00"
                document.getElementById("montoTotal").innerHTML = "13.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "1.375,00"
                document.getElementById("montoTotal").innerHTML = "13.750"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "1.208,33"
                document.getElementById("montoTotal").innerHTML = "14.500"
            }
        }
        if (monto == 20000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "10.7500"
                document.getElementById("montoTotal").innerHTML = "21.500"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "7.416,67"
                document.getElementById("montoTotal").innerHTML = "22.250"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "5.750"
                document.getElementById("montoTotal").innerHTML = "23.000"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "4.750"
                document.getElementById("montoTotal").innerHTML = "23.750"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "4.083,33"
                document.getElementById("montoTotal").innerHTML = "24.500"

            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "3.250"
                document.getElementById("montoTotal").innerHTML = "26.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "2.750"
                document.getElementById("montoTotal").innerHTML = "27.500"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "2.416,67"
                document.getElementById("montoTotal").innerHTML = "29.000"
            }
        }

        if (monto == 30000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "16.125"
                document.getElementById("montoTotal").innerHTML = "32.250"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "11.125"
                document.getElementById("montoTotal").innerHTML = "33.375"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "8.625"
                document.getElementById("montoTotal").innerHTML = "34.500"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "8.125"
                document.getElementById("montoTotal").innerHTML = "40.625"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "6.125"
                document.getElementById("montoTotal").innerHTML = "36.750"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "4.875"
                document.getElementById("montoTotal").innerHTML = "39.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "4.125"
                document.getElementById("montoTotal").innerHTML = "41.250"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "3.625"
                document.getElementById("montoTotal").innerHTML = "43.500"
            }
        }
        if (monto == 40000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "21.500"
                document.getElementById("montoTotal").innerHTML = "43.000"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "14.833,33"
                document.getElementById("montoTotal").innerHTML = "44.500"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "11.500"
                document.getElementById("montoTotal").innerHTML = "46.000"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "9.500"
                document.getElementById("montoTotal").innerHTML = "47.500"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "8.166"
                document.getElementById("montoTotal").innerHTML = "48.996"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "6.500"
                document.getElementById("montoTotal").innerHTML = "52.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "5.500"
                document.getElementById("montoTotal").innerHTML = "55.000"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "4.833,33"
                document.getElementById("montoTotal").innerHTML = "58.000"
            }
        }
        if (monto == 50000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "26.875"
                document.getElementById("montoTotal").innerHTML = "53.750"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "18.541,67"
                document.getElementById("montoTotal").innerHTML = "55.625"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "14.375"
                document.getElementById("montoTotal").innerHTML = "57.500"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "11.875"
                document.getElementById("montoTotal").innerHTML = "59.375"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "10.208"
                document.getElementById("montoTotal").innerHTML = "61.248"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "8.125"
                document.getElementById("montoTotal").innerHTML = "65.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "6.875"
                document.getElementById("montoTotal").innerHTML = "68.750"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "6.014"
                document.getElementById("montoTotal").innerHTML = "72.170"
            }
        }
        if (monto == 60000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "32.250"
                document.getElementById("montoTotal").innerHTML = "64.500"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "22.250"
                document.getElementById("montoTotal").innerHTML = "66.750"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "17.250"
                document.getElementById("montoTotal").innerHTML = "69.000"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "14.250"
                document.getElementById("montoTotal").innerHTML = "71.250"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "12.250"
                document.getElementById("montoTotal").innerHTML = "73.500"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "9.750"
                document.getElementById("montoTotal").innerHTML = "78.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "8.250"
                document.getElementById("montoTotal").innerHTML = "82.500"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "7.250"
                document.getElementById("montoTotal").innerHTML = "87.000"
            }
        }
        if (monto == 70000) {
            if (cuotas == 2) {
                document.getElementById("vcuotas").innerHTML = "37.625"
                document.getElementById("montoTotal").innerHTML = "75.250"
            }
            if (cuotas == 3) {
                document.getElementById("vcuotas").innerHTML = "25.958"
                document.getElementById("montoTotal").innerHTML = "77.875"
            }
            if (cuotas == 4) {
                document.getElementById("vcuotas").innerHTML = "20.125"
                document.getElementById("montoTotal").innerHTML = "80.500"
            }
            if (cuotas == 5) {
                document.getElementById("vcuotas").innerHTML = "16.625"
                document.getElementById("montoTotal").innerHTML = "83.125"
            }
            if (cuotas == 6) {
                document.getElementById("vcuotas").innerHTML = "14.292"
                document.getElementById("montoTotal").innerHTML = "85.752"
            }
            if (cuotas == 8) {
                document.getElementById("vcuotas").innerHTML = "11.375"
                document.getElementById("montoTotal").innerHTML = "91.000"
            }
            if (cuotas == 10) {
                document.getElementById("vcuotas").innerHTML = "9.625"
                document.getElementById("montoTotal").innerHTML = "96.250"
            }
            if (cuotas == 12) {
                document.getElementById("vcuotas").innerHTML = "8.458"
                document.getElementById("montoTotal").innerHTML = "101.500"
            }
        }
        
    }
}