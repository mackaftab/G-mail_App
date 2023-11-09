
import './App.css';
import Main from './components/Main';
import Signin from './components/Signin';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>} exact/>
        <Route path='/main' element={<Main/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
