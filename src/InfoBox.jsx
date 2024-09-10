import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info})
{
    const INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwxLByTUqsMIIhbqXjtSw3CULZmxlVq6_ng&usqp=CAU";
  
    return(
        <div className="InfoBox">
          
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="heading">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temprature ={info.temp}&deg;C</p>
        <p>Humidity  ={info.humidity}</p>
        <p>Min Temp  ={info.tempMin}&deg;C</p>
        <p>Max Temp  ={info.tempMax}&deg;C</p>
        <p>The weather can de described as <i>{info.weather}</i> FeelsLike ={info.feelsLike}&deg;C</p>
       
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}