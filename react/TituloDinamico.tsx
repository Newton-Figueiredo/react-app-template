import React from 'react'
import {useCssHandles} from 'vtex.css-handles'

const CSS_HANDLES = ['container','textEstatico','textDinamico']

type Propstitulodinamico ={
  titulo:string
}

const titulodinamico: StorefrontFunctionComponent<Propstitulodinamico> = ( {titulo}:Propstitulodinamico ) => {

      const handles = useCssHandles(CSS_HANDLES)
      console.log(titulo);

      return(
        <div className={`${handles.container}`}>
          <h1 className={`${handles.textEstatico}`}>Teste</h1>
          <h1 className={`${handles.textDinamico}`}>{titulo}</h1>
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
