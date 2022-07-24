import { AppBar, colors, Container, MenuItem, Select, Toolbar,createTheme, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(()=>({

    title:{
        flex :1,
        fontFamily :"Montserrat",
        color:"gold",
        fontWeight:"bold",
        cursor:"pointer"


    }
}))

 const Header = () => {


    const classes = useStyles();
    const history = useHistory();


    const {currecy , setcurrecy}  = CryptoState()


    console.log(currecy);

    const darkTheme = createTheme({
        palette: {
          primary:{
          main:"#fff"
        },
        type:"dark"
    },
      });

  return (
    <ThemeProvider theme={darkTheme}>

 

<AppBar color='transparent' position='static'>

   <Container>

    <Toolbar>

        <Typography onClick={()=> history.push("/")} 
        variant="h5"
        className={classes.title}> Crypto Tracker 
        </Typography>
      

        <Select variant='outlined'
        style={{
            width:100,
            height:40,
            marginRight:15
        }}
        
        value={currecy}
        onChange={(e) => setcurrecy(e.target.value)}
        >

            <MenuItem value={'USD'} >USD</MenuItem>
            <MenuItem value={'LKR'} >LKR</MenuItem>

        </Select>

    </Toolbar>

 


   </Container>

</AppBar>
</ThemeProvider>
  )
}

export default Header;