import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
// import About from './components/About/About';
import Country from './components/Country/Country';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          
          <Route path='country/:name' element={<Country />} />
          <Route path='weather/:city' element={<Weather />} />
        </Routes>
      </BrowserRouter>,

    </div>
  );
}

export default App;
