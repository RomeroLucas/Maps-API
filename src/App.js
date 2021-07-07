// reac-router dom para troca de páginas
import { Switch, Route } from 'react-router-dom'

//import de components
import Nav from './components/nav'

//import de views
import Entregas from './views/entregas';
import Home from './views/home'
import MapView from './views/map';


function App() {
  return (
    <div className="App">
      <Nav />

      <div style={{marginTop: '10vh'}}>
        <Switch>
          <Route path='/rota-entrega' component={MapView} />
          <Route path='/entregas' component={Entregas} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
