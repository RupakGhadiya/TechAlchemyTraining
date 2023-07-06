import "./App.css";
import Nav from "./Nav";
import PostData from "./Pages/Postdata/PostData";
import SelectToken from "./Pages/Selecttoken/SelectToken";
import SelectToken2 from "./Pages/Selecttoken/SelectToken2";

import Swap from "./Pages/Swap/Swap";
import Transiction from "./Pages/Transiction/Transiction";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/selectToken" element={<SelectToken2 />} />
        <Route path="/CommomBases" element={<SelectToken />} />
        <Route path="/transiction" element={<Transiction />} />
        <Route path="/post" element={<PostData />} />
      </Routes>
    </div>
  );
}

export default App;
