/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Item from "./todoList/Item";
import { TodoListContext } from "./../context/TodoListContext";
import Add from "./todoList/Add";
import { useState } from "react";
import Back from "./backGround/Back";
import { BackContext } from "./../context/BackContext";
import Head from './backGround/head';

export default function Profile() {
  const { name } = useContext(LoginContext);
  const [update, setUpdate] = useState({});
  const [change, setChange] = useState(false);
  const [arr, setArr] = useState([
    {
      id: "1",
      name: "chinh",
      age: "21",
    },
    {
      id: "2",
      name: "chinh2",
      age: "18",
    },
  ]);

  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return (
          <Item key={key} id={value.id} name={value.name} age={value.age} />
        );
      });
    }
    return result;
  };

  return (
    <>
      <TodoListContext.Provider value={{ arr, update, setArr, setUpdate }}>
        <BackContext.Provider value={{ change, setChange }}>
          <Back />
          <Head />
          <div className="container">
            <Add />
            <div className="container-login">
              Name:{name}
              <div className="todo-list">{show(arr)}</div>
            </div>
          </div>
        </BackContext.Provider>
      </TodoListContext.Provider>
    </>
  );
}
