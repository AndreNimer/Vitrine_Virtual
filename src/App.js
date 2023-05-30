import './App.css';
import Menu from './componentes/Nav'
import Footer from './componentes/Footer'
import Row from "./componentes/Row"
import Row2 from "./componentes/Row2"
import { categories } from './Api';

function App() {
  
  return (
    <div className="App">
      <Menu />
      {categories.map( (category) => {
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      } )}
      <Row2 path ='/row2' component={Row2} />
      <Footer />
    </div>
  );
}

export default App;
