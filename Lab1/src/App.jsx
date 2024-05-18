import './App.css';
import{NavScrollExample} from './components/MyNav';
import { Slider } from './components/Slider';
import Products from "./components/products/Products";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavScrollExample></NavScrollExample>
      <Slider></Slider>
			<Products />
      <Footer></Footer>
    </div>
  );
}

export default App;
