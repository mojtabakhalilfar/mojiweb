import { createContext ,useState} from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import FirstPage from './component/FirstPage/FirstPage';
import Resume from './component/Resume/Resume';
import Articles from './component/Articles/Articles';
import Portfolio from './component/Portfolio/Portfolio';
import AboutME from './component/AboutMe/AboutMe';


export const ClickedAll=createContext()
function App() {
  const [clicked , setClicked] = useState([true , false , false , false, false])
  const [darkmood , setdarkmood]=useState(false
    )
  return (
    <ClickedAll.Provider value={{clicked , setClicked, darkmood ,setdarkmood }}>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/aboutmE' element={<AboutME/>} />
        </Routes>
    </Router>
    </ClickedAll.Provider>
    
  );
}

export default App;
