import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
import "./WheatherApp.css";
export default function WheatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let UpdateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
       <div className='box'>
         <div style={{textAlign:"center"}} ><h2>AccuWheather by kush</h2>
        <SearchBox  UpdateInfo={ UpdateInfo} />
        <InfoBox info={weatherInfo}/>
        </div>
       </div>
        
    );
}