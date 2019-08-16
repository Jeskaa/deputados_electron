async function depu(){  

  const template = document.getElementById("resp");

  const response = await fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados/`
  )

  const tados = await response.json()
  tados.dados.map(function(dep) {
    template.innerHTML += `
      <div class="dep">
        <img class="img" src=${dep.urlFoto}>
        <div class="tab">
          <p>Depultado: ${dep.nome}</p>
          <p>Partido: ${dep.siglaPartido} - ES: ${dep.siglaUf} </p>        
          <p>Email: ${dep.email}</p>
        </div>
      </div>      
    `
    }      
  )  
}

depu();