import logo from './logo.svg';
import './App.css';
import Create1 from './components/Create1';
import { Routes,Route } from 'react-router-dom';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
<Routes>
  <Route exact path='/' element={<Read/>}></Route>
  <Route exact path='/create' element={<Create1/>}></Route>
  <Route exact path='/edit' element={<Edit/>}></Route>

</Routes>
    </div>
  );
}

export default App;
