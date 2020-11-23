import React from "react";
import {useDispatch} from "react-redux"

import {ADD} from "../redux/actionConstants";

export default function Input(props){

    const dispatch = useDispatch();
    const [obj,setObj] = React.useState({label:"",details:""});
    const handleChange = (event,type)=>{
        console.log("entered");
        if(type==="title"){
            obj["label"]=event.target.value;
        }
        else{
            obj["details"]=event.target.value;
        }
        setObj(obj);
        console.log(obj);
    }

    const handleSave=(obj)=>{
            dispatch({type:ADD,payload:obj});
            props.history.push("/");
    };

    return(
        <div className="center">
            <input onChange={(event)=>{handleChange(event,"title")}} type="text" id="heading" name="heading"  placeholder="Title"/>
            <input onChange={(event)=>{handleChange(event,"details")}} type="text" id="description" name="description" placeholder ="description"/>
            <button onClick={()=>{handleSave(obj)}}>Save</button>
        </div>
    )
}