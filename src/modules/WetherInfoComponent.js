import styled from "styled-components"

const WetherIconAddress= {
    Sunrise: "icons/sunrise.png",
    Sunset: "icons/sunrise.png",
    Humidity: "icons/humidity.png" ,
    Wind: "icons/wind.png",
    Pressure:"icons/pressure.png" ,
}


const WetherInfo= styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    justify-content: space-between;
    margin: 30px auto;
`;

const Location= styled.span`
    font-size:28px;
    font-weight:bold;
`

const Condition = styled.span`
    margin : 20px auto;
    font-size:14px
`;

const WetherIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;

`;

const WetherInfoLabel= styled.span`
    font-size:14px;
    font-weight:bold;
    margin:20px
    text-align:start;
    width:90%;
`

const InfoContainer= styled.div`
    display:flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const InfoIcon= styled.img`
    width:35px;
    height:35px;
`

const InfoLabel = styled.span`
    display:flex;
    flex-direction:column;
    font-size: 14px;
    margin: 15px;
    & span{
        font-size:12px;
        text-decoration:capatalize;
    }
`




const DataContainer= styled.div`
display:flex;
flex-direction:row;
width: 85%;
justify-content: space-evenly;
align-items: center;
flex-wrap:wrap;
`

// const BackButton= styled.button`
//     color:black;
    
// `

const WetherInfoComponent= (props)=>{
    const {name,value}= props
    return(
        <InfoContainer>
            <InfoIcon src= {WetherIconAddress[name]} />
            <InfoLabel>{value} <span>{name}</span></InfoLabel>

        </InfoContainer>
    )
}

const getTime= (timeS)=>{
    return `${new Date(timeS * 1000).getHours()} : ${new Date(timeS * 1000).getMinutes()}`
}

const WetherComponent = (props)=>{
    const {wether}=props
    const isDay= wether.weather[0].icon[2]==="d" ? true:false
    const iconn=wether.weather[0].icon
    const iconAddress= `http://openweathermap.org/img/wn/${iconn}@2x.png`
    return (
        <>
        <WetherInfo>
            <Condition><span>{wether.main.temp} C</span>| {wether.weather[0].description}</Condition>
            {/* <WetherIcon src="icons/weather.png"/> */}
            <WetherIcon src={iconAddress} />
        </WetherInfo>
        <Location>{wether.name}</Location>
        <WetherInfoLabel>Weather info</WetherInfoLabel>
        <DataContainer>
            <WetherInfoComponent name= {isDay? "Sunset":"Sunrise"} value={`${getTime(wether?.sys[isDay ? "sunset" : "sunrise"])}`} />
            <WetherInfoComponent name="Humidity" value={wether.main.humidity+" %"} />
            <WetherInfoComponent name="Wind" value={wether.wind.speed+" m/sec"} />
            <WetherInfoComponent name="Pressure" value={wether.main.pressure+" hPa"} />
        </DataContainer>

        </>
    )
}

export default WetherComponent