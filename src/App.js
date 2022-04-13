
import './App.css';
import Nav from './nav'
import Home from './homeContainer/home';
import Items from './itemsContainer/items'
import SingleItem from './itemsContainer/singleItemContainer/singleItem';
import About from './aboutContainer/about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SingleItemRoute from './itemsContainer/singleItemContainer/singleItemRoute';
import EditItem from './itemsContainer/editItemContainer/editItem';
import EditItemRoute from './itemsContainer/editItemContainer/editItemRoute';

function App() {
  const deleteItem = ()=>{
    console.log('something')
  }
  return (
    <Router>
      <div className="App">
        
          
        <Nav />
          <Routes>
            <Route exact path="/" element={< Home />}/>
            <Route exact path="/about" element={ < About />}/>
            <Route exact path="/items" element={ < Items />}/>
            <Route exact path="/items/:id" element={ <SingleItemRoute deleteItem={deleteItem}/>} /> 
            <Route exact path="/items/update/:id" element = { <EditItemRoute />}/>
            <Route path="/items/:id" element={ <SingleItem />} /> 
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;
