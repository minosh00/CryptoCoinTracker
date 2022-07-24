import React, {  createContext, useContext ,useState,useEffect} from 'react'

 const  Crypto= createContext();

const CryptoContext = ({children}) => {

    const [currecy , setcurrecy ] = useState("LKR")
    const [symbol , setsymbol ] = useState("Rs")


    useEffect(() => {
        if (currecy === "LKR")setsymbol("Rs");
        else if(currecy === "USD") setsymbol("$");
    }, [currecy]);




  return (
    <Crypto.Provider value={{currecy,symbol,setcurrecy}} >{children}</Crypto.Provider>
  )
};

export default CryptoContext;

export const  CryptoState = () =>{

    return useContext(Crypto)
}
