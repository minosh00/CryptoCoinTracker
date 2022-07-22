import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Carousel from './Carousel';
import Coinstable from '../Coinstable/Coinstable';

const useStyles = makeStyles(()=> ({

    banner:{
        backgroundImage:"url(./banner.jpg)",
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"colum",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{
        display:"flex",
        height:"40%",
        flexDirection:'column',
        justifyContent:"center",
        textAlign:"center",
    }
}))


const Banner = () => {

    const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>

<div  className={classes.tagline}>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Typography
     variant="h2"
     style={{
        fontWeight:"bold",
        marginBottom:15,
        fontFamily:"Montserrat"

     }}>
        Crypto Tracker 
    </Typography>
    <Typography
     variant="subtitle3"
     style={{
      color:'gold',
      textTransform:"capitalize",
        fontFamily:"Montserrat",
     
       

     }}>
       Powered By Minosh  
    </Typography>
    <Typography
     variant="subtitle3"
     style={{
      color:'darkgrey',
      textTransform:"capitalize",
        fontFamily:"Montserrat"

     }}>
        Get All the Information Regrading your Favorite Crypto Currency  
    </Typography>
   
   


<Carousel/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Coinstable/>

    </div>
 </Container>

    </div>
  )
}

export default Banner