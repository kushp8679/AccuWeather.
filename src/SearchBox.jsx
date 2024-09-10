import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({UpdateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_kEY="942e09af9e835b82686d0c9bb9a1a410";



    let getWheatherInfo = async()=> {
        try{
                        let response= await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=metric`);
                    let jR = await response.json();
                    console.log(jR);
                    let result =
                    {
                        city:city,
                        temp:jR.main.temp,  
                        tempMin:jR.main.temp_min,
                        tempMax:jR.main.temp_max,
                        humidity:jR.main.humidity,
                        feelsLike:jR.main.feels_like,
                        weather:jR.weather[0].description,


                    };
                    console.log(result);
                    return result;
            }catch(err)
            {
                throw err;
            }
    };


   
    let handelchange=(event)=>{
        setCity(event.target.value);
    }


    let handelSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
       let info = await getWheatherInfo();
       UpdateInfo(info);
        }catch(err)
        {
            setError(true);
        }
    }
    return(
       
        <div className='SearchBox'>
            
            <form action="" onSubmit={handelSubmit}>
            <TextField id="city" label="Enter city.." variant="outlined" required  vlaue={city }  onChange={handelchange}/>
            <br /><br /><br /><br />

            <Button variant="contained" type="submit">Submit</Button>
            {error && <p style={{color:"red"}}>No Such Place in our  API Exist!</p>}
            </form>
        </div>

    );
}