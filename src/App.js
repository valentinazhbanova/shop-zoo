import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
import Shop from "./Shop";
import './App.css';

function App() {
  return <Router>
  <nav>
    <Link to='/' className="link">Магазин посуды "Блеск"</Link>
    <Link to='/catalog' className="link">Каталог</Link>
    <Link to='/contacts' className="link">Контакты</Link>
  </nav>

  <Routes>
    <Route path='/' element ={<Shop />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/contacts' element={<Contacts />} />
  </Routes>
  </Router>
}

export default App;