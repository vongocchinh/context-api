
import { React, useContext } from 'react';
import { BackContext } from './../../context/BackContext';
export default function Head(){
    const {change}=useContext(BackContext);
    const stylesTheme = {
        backgroundColor: change ? "#FFF" : "#000",
        color: change ? "#000" : "#F44FFF",
        fontSize: change ? 50 : 50,
    
    
      };
    return (
        <>
        <div style={stylesTheme}>
            ahhi ahihi
        </div>
        </>
    )
}