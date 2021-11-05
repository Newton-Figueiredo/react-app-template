import React from 'react'



type Propstitulodinamico ={
  titulo:string
}

const titulodinamico: StorefrontFunctionComponent<Propstitulodinamico> = ( {titulo}:Propstitulodinamico ) => {

      console.log(titulo);

      return(
        <div>
          <h1>Teste</h1>
          <h1>{titulo}</h1>
        </div>
      )
}

titulodinamico.schema = {
  title:"Conteudo do titulo",
  description:"descricao",
  type:"object",
  properties:{
    title:"Conteudo do titulo",
    description:"descricao",
    type:"string",
    default:null
  }
}

export default titulodinamico
