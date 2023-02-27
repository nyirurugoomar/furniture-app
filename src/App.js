
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import aboutUs from './components/Pages/aboutUs';
import Services from './components/Pages/Services';
import ProductPage from './components/Pages/ProductPage';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <>
    <Router>
      
       <Navbar/>
      
      
      
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/aboutus' component={aboutUs}/>
        <Route path='/services' component={Services}/>
        <Route path='/productpage' component={ProductPage}/>
        <Route path='/contact' component={Contact}/>
        
     </Switch> 
      <Footer/>
</Router>  
    </>
  );
}

export default App;
