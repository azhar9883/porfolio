import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard';
import Home from './pages/Home';
import './App.css';



function App() {
  return (

    <div className='100-vh' style={{ display: "flex", height: "100%" }}>



      <Sidebar />
      <Dashboard />

    </div>



  );
}

export default App;
