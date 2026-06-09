
import './App.css';
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Container } from '@mui/material';
import Header from './components/Header/Header.js'
import Definations from './components/Definations/Definations.js'
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
function App() {



const DarkModeSwitch  = styled(Switch)(({ theme }) => ({

  '& .MuiSwitch-switchBase.Mui-checked': {
    color: grey[600],
    '&:hover': {
      backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: grey[600],
  },
}));

const [lightMode, setLightMode] = useState(false);
const [meanings,setMeanings]= useState([])
const [word,setWord] = useState("")
const [category,setCategory] = useState("en")
 
 const dictionaryAPi = async()=>{
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data.data)
      
    }catch(error){
      console.log(error)
    }
  }
 
  useEffect(() => {
     
    dictionaryAPi();
  
}, [word, category,dictionaryAPi]);
 console.log(meanings)
  return (
    <div
  className="App"
  style={{
    height: "100vh",
    backgroundColor: lightMode ? "#fff" : "#282c34",
    color: lightMode ? "#000" : "#fff",
    transition: "all 0.5s linear",
  }}
>
     <Container maxWidth="md" >

      <div style={{position:"absolute",top:0,right:20,marginTop:10}}>
<span>{lightMode ? "darkMode" : "LightMode"}</span>
<DarkModeSwitch
  checked={lightMode}
  onChange={() => setLightMode(!lightMode)}
/>
      </div>
      <Header category ={category} setCategory={setCategory}  word={word} setWord={setWord} lightMode={lightMode}/>
      
     { meanings && (<Definations word ={word} category={category} meanings={meanings} lightMode ={lightMode} />)}
     </Container>
    </div>
  );
}

export default App;
