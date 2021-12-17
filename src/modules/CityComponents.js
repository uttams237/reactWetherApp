import styled from "styled-components";

const WetherIcon = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCityLabel= styled.span`
    color:black;
    font-size:18px;
    font-weight:18px;
    font-weight:bold;
    margin: 10px auto;
`


const SearchBox= styled.form`
    display:flex;
    flex-direction:row;
    border:black solid 1px;
    border-radius:2px;
    color:black;
    font-size:18px;
    font-weight:bold;
    margin:10px auto;
    & input{
        padding:10px;
        font-size:14px;
        border:none;
        outline:none;
        font-weight:bold;
    }
    & button{
        padding:10px;
        font-size:14px;
        border:none;
        outline:none;
        font-weight:bold;
        color:white;
        background-color:black;
        cursor:pointer;
    }
`;


const CityComponent = (props) => {

    const {updateCity,fetchWether}= props

    return (
    <>
    <WetherIcon src="icons/weather.png" />
    <ChooseCityLabel>Type your city</ChooseCityLabel>
    <SearchBox onSubmit={fetchWether} >
        <input onChange={(event)=> updateCity(event.target.value)} placeholder="city name"/>
        <button type="submit">Search</button>
    </SearchBox>
    </>
    )
};

export default CityComponent;
