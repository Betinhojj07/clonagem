
import './index.css';
  import {Link} from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <h1>Hello word</h1>

     <Link to="index2">ir para index2</Link>
      <img className="icone" src="/assets/img/icones.jpg"/>
    </div>
  );
}


// export default App;

