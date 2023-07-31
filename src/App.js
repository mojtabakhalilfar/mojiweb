import { createContext ,useState} from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Dashbord from './component/Dashbord/Dashbord';
import Users from './component/Users/Users';
import Singin from './component/Singin/Singin';
import Login from './component/Login/Login';

export const ClickedAll=createContext()
function App() {
  const [clicked , setClicked] = useState([true , false , false , false])
  return (
    <ClickedAll.Provider value={{clicked , setClicked}}>
      <Router>
        <Routes>
          <Route path='/' element={<Dashbord/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/singin' element={<Singin/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>
    </ClickedAll.Provider>
    
  );
}

export default App;
