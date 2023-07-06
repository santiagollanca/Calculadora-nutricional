var bebidaselec="";guarnicionselec="";principalselec="";bebidacant="";guarnicioncant="";principalcant="";

let contadorprincipal = (valor) => {
    let proteinas =0
    let calorias =0
    let gramos = parseFloat(valor);
    let gramos2 = parseFloat(valor);
    
    if(principalselec=="pollo") {
         proteinas= gramos * 0.2; 
        calorias = gramos2 * 1.07;
    }
    if(principalselec=="pizza") {
        proteinas = gramos * 0.5; 
        calorias = gramos2 * 17;
    }
    if(principalselec=="pescado") {
        proteinas = gramos * 3.5; 
        calorias = gramos2 * 127;
    }
    if(principalselec=="carne") {
        proteinas = gramos * 95; 
        calorias = gramos2 * 170;
    }
    if(principalselec=="milanesa") {
        proteinas = gramos * 12; 
        calorias = gramos2 * 27;
    }

    let resultadoProteinas = document.getElementById("resultado_proteinas");
    resultadoProteinas.innerHTML = "<p>" + proteinas + " g</p>";
    let resultadoCalorias = document.getElementById("resultado_calorias");
    resultadoCalorias.innerHTML = "<p>" + calorias + " g</p>";
    
    console.log(principalselec+""+principalcant)  
};




  

let sumarcomida = (id, name, valor) =>{
    console.log(id, name, valor)

    if(name=="principal"){
        principalselec=valor
    }

    if(name=="guarnicion"){
        guarnicionselec=valor
    }

    if(name=="bebida"){
        bebidaselec=valor
    }
    
}
