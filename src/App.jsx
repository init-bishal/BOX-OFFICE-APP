import {BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import { useQuery,QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
const queryClient=new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/starred" element={<Starred/>}/>
            </Route>
            <Route path="/show/:showId" element={<Show/>}/>
            <Route path="*" element={<div>Not Found</div>}/>

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
