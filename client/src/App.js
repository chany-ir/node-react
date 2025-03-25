import logo from './logo.svg';
import './App.css';
import { Home } from './componante/Home';
import {CreateNewRequest} from './componante/CreateNewRequest';
import {Valunteer}from './componante/Valunteer';
import {SeeOneReqest}from './componante/SeeOneReqest';
import {SeeTheRequest}from './componante/SeeTheRequest';
import {Private}from './componante/Private';
import { ApiKeyProvider } from './componante/UseContect';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
<ApiKeyProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateNewRequest" element={<CreateNewRequest/>} />
        <Route path="SeeTheRequest/" element={<SeeTheRequest/>}/>
        <Route path="/SeeOneReqest/:id" element={<SeeOneReqest/>}/>
        <Route path="/Valunteer" element={<Valunteer />} />
        <Route path="/Private" element={<Private/>}/>
      </Routes>
    </Router>
    </ApiKeyProvider>
    </div>
  );
}

export default App;
