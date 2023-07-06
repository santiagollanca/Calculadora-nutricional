var bebidaselec="";guarnicionselec="";principalselec="";bebidacant="";guarnicioncant="";principalcant="";

let contador = (valor) => {
    
    let gramos = parseFloat(valor);
    let proteinas = gramos * 0.2; 
    let resultadoProteinas = document.getElementById("resultado_proteinas");
    resultadoProteinas.innerHTML = "<p>" + proteinas + " g</p>";

    let gramos2 = parseFloat(valor);
    let calorias = gramos2 * 1.07;
    let resultadoCalorias = document.getElementById("resultado_calorias");
    resultadoCalorias.innerHTML = "<p>" + calorias + " g</p>";

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
