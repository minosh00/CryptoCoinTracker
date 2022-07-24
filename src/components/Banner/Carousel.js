
import { makeStyles } from "@material-ui/core";
import { CryptoState } from '../../CryptoContext';
import { TrendingCoins } from '../../Api/api';
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "60%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
       disableButtonsControls:false,
       disableDotsControls:true,
        textTransform: "uppercase",
        color: "white",
      },

}));

export  function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

const Carousel = () => {

    const [tranding , settranding] = useState([]);
    const classes = useStyles();
   // const {currecy} = CryptoState()

    const { currecy, symbol} = CryptoState();

//const currecy= CryptoState();

    const  DisplayTrandingcoins =async () =>{
        const { data } = await  axios.get(TrendingCoins(currecy))

        settranding(data);
    };
    console.log(tranding)

    useEffect(()=>{

        DisplayTrandingcoins(currecy);
    });

//
    const items =tranding.map((coins)=>{

        let profit = coins.price_change_percentage_24h>=0; 

        return (
            <Link
            className={classes.carouselItem}
            to={`/coins/${coins.id}`}
            >
                <img
                src={coins?.image}
                alt={coins.name}
                height='80'
                style={{maringBottm:10}} />
           
            <span>

          {coins?.symbol}
          
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >{profit && "+"}{coins?.price_change_percentage_24h?.toFixed(2)}%</span>
            </span>

<span
style={{ fontSize: 22, fontWeight: 500 }}>
{symbol} {numberWithCommas(coins?.current_price.toFixed(2))}

</span>
            </Link>
        )
    })

    const responsive={
        0:{
            items:4,
        },
        512:{
            items:5,
        }
    }


  return (

    <div className={classes.carousel}>
        

        <AliceCarousel
        
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
        
        />

        
    </div>
  )
}

export default Carousel