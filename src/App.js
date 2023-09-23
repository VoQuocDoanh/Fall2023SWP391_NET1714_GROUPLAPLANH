
import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import ViewBeat from './beat/ViewBeat';
import CreateBeat from './beat/CreateBeat';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Register' element={<RegisterUser/>}/>
          <Route exact path='/ViewBeat' element={<ViewBeat/>}/>
          <Route exact path='/CreateBeat' element={<CreateBeat/>}/>
        </Routes>
      </Router>          
    </div>
  );
}

export default App;
