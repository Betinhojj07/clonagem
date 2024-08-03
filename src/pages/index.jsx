
import './index.css';
  import {Link} from "react-router-dom"

export default function App() {
function clicou(){
for(let i =0;i<10;i++){
  alert(i)
}
}

function passar(){
  alert("você foi avisado")
}




  return (
    <div className="App">
      <h1 onMouseMove={passar}>Hello word</h1>

   
      <img className="icone" src="/assets/img/icones.jpg"/>
      <Link to="index2">ir para index2</Link>

      <button onClick={clicou} >Clique aqui</button>
    </div>
  );
}


// export default App;

