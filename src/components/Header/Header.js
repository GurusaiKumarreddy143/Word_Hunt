import React from 'react';
import '../Header/Header.css'
import {TextField,createTheme,ThemeProvider,MenuItem} from '@mui/material'
import categories from '../../data/category'
const Header = ({category,setCategory,word,setWord,lightMode})=>{
    
const theme = createTheme({
  palette: {
    primary:{
        main:"#fff"
    },
     mode: lightMode ? "light" : "dark",
  },
});
const handleChange = (language)=>{
  setCategory(language)
  setWord("")
}
    return (
        <div className="header">
            <span className="title"  style={{
    color: lightMode ? "#000" : "#ff0000",
  }}> {word ? word : "Word Hunt"}</span>
            <div className="inputs">
            <ThemeProvider theme={theme}>
            <TextField 
            className="search"
            label="search word"
             variant="standard"
             value={word}
             onChange={(e)=>setWord(e.target.value)}
              sx={{
    input: {
      color: lightMode ? "#000" : "#fff",
    },
    "& .MuiInputLabel-root": {
      color: lightMode ? "#000" : "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: lightMode ? "#000" : "#fff",
    },
  }}
              />       
          <TextField
          className="languageSelect"
          select
          label="Language"
          // helperText="Please select language "
          value={category}
          onChange={(e)=>handleChange(e.target.value)}
          sx={{
    "& .MuiSelect-select": {
      color: lightMode ? "#000" : "#fff",
    },
    "& .MuiInputLabel-root": {
      color: lightMode ? "#000" : "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: lightMode ? "#000" : "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: lightMode ? "#000" : "#fff",
    },
  }}
        >
            {categories.map((option)=>{
                return <MenuItem key={option.label} value={option.label} >
              {option.value}
            </MenuItem>
            })}
          
        </TextField>
        </ThemeProvider>
               
            </div>
        </div>
    )
}

export default Header



// styles learn how to apply in materail ui and react js 

//  sx={{
//     // Label
//     "& .MuiInputLabel-root": {
//       color: "#fff",
//       fontSize: "16px",
//     },

//     // Label when focused
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "red",
//     },

//     // Selected value text
//     "& .MuiSelect-select": {
//       color: "lightgreen",
//       fontWeight: "bold",
//       fontSize: "18px",
//     },

//     // Helper text
//     "& .MuiFormHelperText-root": {
//       color: "#fff",
//       fontSize: "14px",
//       fontFamily:"serif"
//     },

//     // Border
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#fff",
//       },
//       "&:hover fieldset": {
//         borderColor: "yellow",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "green",
//       },
//     },
//   }}