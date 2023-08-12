import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/NavBar/Navbar';
import Pages from './Component/Pages/index';
function App() {
  
  return (
    <div className="App">
         <Header/>
         <Navbar/>
         <Pages/>
    </div>
  );
}

export default App;
