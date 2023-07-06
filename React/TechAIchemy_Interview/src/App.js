import './App.css';
import { Route, Routes } from "react-router-dom"
import Orders from './components/Pages/Orders';
import Notification from './components/Pages/Notification';
import Settings from './components/Pages/Settings';
import Help from './components/Pages/Help';
// import Nav from './components/Home/Sidebar.jsx';
import Sidebar from './components/Sidebars/Sidebar.js';
import Home from './components/Pages/Home';
import RestDetails from './components/Pages/RestDetails';
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/notifiction' element={<Notification />} />
        <Route path='/help' element={<Help />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/restdetails/:id' element={<RestDetails />} />


      </Routes>
    </>
  );
}

export default App;
