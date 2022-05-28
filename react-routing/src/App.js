import { Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
        <div className='Navigation-bar'>
            <Link to="/">Home</Link>
            <Link to="/products" >ALL Product</Link> 
        </div>
        <AllRoutes/>

    </div>
  );
}

export default App;
