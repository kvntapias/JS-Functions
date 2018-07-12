        /*Arreglo*/
        /*Es una variable especial que puede contener mas de un valor a la vez, 
        estan escritos con corchetes*/
    
    function nombres(){
    var nombres = ["Juan","Diana","Pablo"];
    document.getElementById("vec").innerHTML = nombres[1];
    var fruits  = ["Orange","Apple","Lemon"];
    nombres.push("Lemon");
    console.log (nombres);
    }

    function ciclo(){
        var elements = ["Juan","Diana","Pablo","Juan","Diana",
                        "Pablo","Juan","Diana","Pablo","Juan","Diana","Pablo",
                       "Juan","Diana","Pablo","Ana","Luis","Daniela","Karo", "Kim"] 
        var otro = prompt("Agregar un nombre al vector");   
        elements.push(otro);
        
        for (i=0;i<=1;i++){ 
            document.write("<ul>")
            for (i=0;i<=20;i++){ 
                document.write("<li>")  
                    document.write(elements[i])
                    document.write("</li>")  
            }
                document.write("</ul>") 
        }
    }
