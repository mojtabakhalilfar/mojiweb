import { createContext ,useState} from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import FirstPage from './component/FirstPage/FirstPage';
import Resume from './component/Resume/Resume';
import Articles from './component/Articles/Articles';
import Portfolio from './component/Portfolio/Portfolio';
import AboutME from './component/AboutMe/AboutMe';
// import ReactAudioPlayer from 'react-audio-player';


export const ClickedAll=createContext()
function App() {
  const [clicked , setClicked] = useState([true , false , false , false, false])
  const [darkmood , setdarkmood]=useState(false)
  const [hide , setHide]=useState(true)
  const [message , setMessage]=useState({})
  const [num , setNum]=useState(0)
  const [farsi , setFarsi] = useState(true)
  return (
    <ClickedAll.Provider value={{clicked , setClicked, darkmood ,setdarkmood ,hide , setHide ,message , setMessage,num , setNum ,farsi , setFarsi}}>
       {/* <ReactAudioPlayer autoPlay loop src="http://dl.behmelody.in/1401/Tir/Emrah%20Karaduman%2C%20No%20Method%20-%20All%20Night%20%282%29.mp3"/> */}
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
