
        function myFuncion(){
            document.getElementById("demo").innerHTML = "HelloWorld";
        }
        
        function producto(x){
            x = 5*5;
           document.getElementById("produc").innerHTML = x;
        }
        
        function errorTipo(num){
            if(typeof num == "number"){
                document.getElementById("dato").innerHTML = "El tipo de dato es correcto" ;
                alert("Correcto!");
            } else {
                document.getElementById("dato").innerHTML = "El tipo de dato es incorrecto";
                alert("Incorrecto");
            };
        }

        function datos(){
        var nombre = prompt("Ingrese su nombre");   
        var apellido = prompt("Ingrese su apellido");   
        if (nombre != null) 
        {document.getElementById("nombre").innerHTML =
                "Hola " + nombre +" " +apellido;
                            }
        }

        function alertaWindow(){
            window.alert(5+6);
        }

        function resultConsole(){
            var suma = 6+1;
            console.log(suma);
        }

        function carro(){
            var carName = "Volvo";
        document.getElementById("carro").innerHTML = carName;
        }

        function numero(){
            var num = 2;
        document.getElementById("numero").innerHTML = num;
        }

    
        function add(suma){
            var x = 10;
            document.getElementById("resultado").innerHTML = x+=10 ;
            return suma;
        }
        
        function rest(rest){
            var x = 10;
            document.getElementById("resultado").innerHTML = x-=20 ;
            return rest;
            
        }

        function mult(mult){
            var x = 10;
            document.getElementById("resultado").innerHTML = x*=20 ;
            return mult;
        }

        function div(div){
            var x = 10;
            document.getElementById("resultado").innerHTML = x/=6 ;
            return div;
        }
