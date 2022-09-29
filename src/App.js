import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase(props){
  return (
    <div className="frase">
      <h1>{props.frase.quote}</h1>
      <p>- {props.frase.author}</p>
    </div>

  );
}

function App(){

  const[frase, obtenerFrase] = useState({});
 

  const consultaAPI =  async () =>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    console.log(resultado.data[0]);
    //agregar el resultado de la API al state; (similar a this.setState)
    obtenerFrase(resultado.data[0]);
  }
  

  //consulta a una rest API
  // npm intsall --save axios
  useEffect(
   
    () => {
      consultaAPI()
    },[] //le agregamos esto para que no sea infinito
    
  )
 // console.log(frase); //frase = this.state

  return(
    <div className="contenedor">
      <Frase
       frase={frase}
      />
      <button
      onClick={consultaAPI}
      >
      Generar Nueva
      </button>

    </div>

  );

}

export default App;