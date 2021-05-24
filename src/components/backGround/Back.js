import React from 'react';
import { BackContext } from './../../context/BackContext';
import { useContext } from 'react';

export default function Back(){
    const {setChange}=useContext(BackContext);
    const setChangeButton=()=>{
        setChange(change=>!change);
    }
    return (
        <>
        <button onClick={setChangeButton}>
            button
        </button>
        </>
    )
}