/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */

import Login from "./components/Login";
import Profile from "./components/Profile";
import React, { useEffect, useState } from "react";
import { LoginContext } from "./context/LoginContext";
function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showLoginFail, setShowLoginFail] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if(showProfile){
      if(name==='abc'){
        setShow(true);
      }else{
        setShowProfile(false)
        setShowLoginFail("Login Fail");
      }
    }
  }, )
  return (
    <div>
      <LoginContext.Provider value={{ name, setName, setShowProfile ,showLoginFail}}>
        {show ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
export default App;
