import React, { } from 'react';
import './style.css'
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
export default function Login(){
    const {setName,setShowProfile,showLoginFail}=useContext(LoginContext);

    return (
        <>

        <div className="container">
            <div className="container-login">
                <input className="input" name="as_name" onChange={(e)=>{
                    setName(e.target.value)
                }} />
                {showLoginFail?showLoginFail:''}
                <input className="input"name="as_pass" />
                <input className="input" type="submit" value="Đăng Nhập" onClick={e=>{
                    setShowProfile(true)
                }} />
            </div>
        </div>
        </>
    )
}