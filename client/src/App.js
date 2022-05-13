import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter , Route , Link , Switch} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
      <Route path ="/" exact component={HomeScreen} />
      <Route path="/cart" exact component = {CartScreen} />
      <Route path="/register" exact component = {RegisterScreen} />
      <Route path="/login" exact component = {LoginScreen} />
      <Route path="/orders" exact component = {OrderScreen} />
      <Route path="/admin" component = {AdminScreen} />
     </BrowserRouter>
    </div>
  );
}

export default App;
