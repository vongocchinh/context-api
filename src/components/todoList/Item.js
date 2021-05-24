import React from 'react';
import { TodoListContext } from './../../context/TodoListContext';
import { useContext } from 'react';
export default function Item({id,name,age}){
    const {arr,setArr,setUpdate}=useContext(TodoListContext);
    const onDelete=()=>{
        for(let i=0;i<arr.length;i++){
            if(arr[i].id===id){
                arr.splice(i,1)
                setArr(arr=>[...arr]);
            }
        }
    }
    const onUpdate=()=>{
        setUpdate({id,name,age});
    }
    return (
        <div className="item">
            {/* <p>{id}</p> */}
            <p>{name}</p>
            <p>{age}</p>
            <p className="delete" onClick={onDelete}>x</p>
            <p className="delete" onClick={onUpdate}>update</p>
        </div>
    )
}