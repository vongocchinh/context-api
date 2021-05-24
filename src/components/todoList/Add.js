import React, { useEffect } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import { useContext, useState } from "react";
export default function Add() {
  const {arr, setArr ,update,setUpdate} = useContext(TodoListContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const addItem = (e) => {
    e.preventDefault()
    setName('')
    setAge('')
    var index=findIndex(arr,update.id);
    if(index!==-1){
        arr[index]={
            ...arr[index],
            name:name,
            age:age
        };
        setArr(arr);
        setUpdate({})
    }else{
        setArr(arr=>[...arr,{id:Date.now(),name:name,age:age}])
        setUpdate({})
    }
    e.target.reset();
  };
  var findIndex=(data,id)=>{
      var ind=-1;
      for(let i=0;i<data.length;i++){
        if(data[i].id===id){
           ind=i;
        }
    }
    return ind;
  }
  useEffect(() => {
      if(update){
          setName(update.name);
          setAge(update.age);
      }
  }, [update])
  return (
    <>
      <div className="container">
        <div className="container-login">
          <form onSubmit={addItem}>
            <input
              className="input"
              name="as_name"
              required
              value={name?name:''}
              placeholder="Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
            value={age?age:''}
              className="input"
              placeholder="Age..."
              name="as_age"
              required
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <input className="input" type="submit" value="add" />
          </form>
        </div>
      </div>
    </>
  );
}
