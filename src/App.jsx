import {BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
function App() {
  return (
    <Router>
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/starred" element={<Starred/>}/>
           <Route path="*" element={<div>Not Found</div>}/>

      </Routes>
    </Router>
  );
}

export default App;
