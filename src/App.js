import styled from "styled-components";
import CityComponent from "../src/modules/CityComponents"
import WetherComponent from "../src/modules/WetherInfoComponent"
import { useState } from "react";
import axios from "axios";
// require('dotenv').config()

// const apiKey="9cc733dda2bd842650cbff3ff66bd7c6"

const apiKey=process.env.REACT_APP_API_KEY
console.log(apiKey)
// console.log(process.env)

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  align-items:center;
  box-shadow: 0 3px 3px #444;
  padding: 20px 10px;
  border-radius:4px;
  width:400px;
  background:white;
  font-family:Roboto Mono;
`;

const AppLable=styled.div`

  color:black;
  font-size:18px;
  font-weight:bold;
`;


function App() {

  const [city,updateCity]= useState("");
  const [wether, updateWether]= useState();

  const fetchWether= async(e)=>{
    e.preventDefault()
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    // console.log(response)

    updateWether(response.data)
  }


  return (
    <Container>
      <AppLable>weather app</AppLable>
      {wether? <WetherComponent wether={wether} /> : 
      <CityComponent updateCity={updateCity} fetchWether={fetchWether} />
      }
      
    </Container>
  );
}

export default App;