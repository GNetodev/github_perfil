import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import './App.css';

function App() {

  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <div className="container"> 
      <p className="nome-usuario">Nome de usuário do Github:</p>
      <input type="text" className="input-search" onBlur={(e => setNomeUsuario(e.target.value))} />
      {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
    
    {/* {formularioVisivel && (
      <Formulario/>
    )}

    <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button> */}
    </div>
  );
}

export default App;
