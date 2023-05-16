import './App.css';
import Menu from './componentes/Nav'
import Footer from './componentes/Footer'
import Row from "./componentes/Row"
import { categories } from './Api';

function App() {
  
  return (
    <div className="App">
      <Menu/>
      {categories.map( (category) => {
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      } )}
      <Footer/>
    </div>
  );
}

export default App;
