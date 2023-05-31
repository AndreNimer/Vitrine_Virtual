import './App.css';
import Menu from './componentes/Nav';
import Footer from './componentes/Footer';
import Row from "./componentes/Row";
import Row2 from "./componentes/Row2";
import { categories } from './Api';
import {Route,Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={categories.map( (category) => {
            return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>} )}
        />
        <Route path='/products/:id' element={<Row2/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
