import React from "react";
import {useDispatch} from "react-redux";

import {DELETE} from "../redux/actionConstants";

export default function Display(props){

    const dispatch = useDispatch();
    const handleDelete=(id)=>{
        dispatch({type:DELETE,payload:{id}});
    }

    return(
        <>
        <div className ="task">
            <h1>{props.list.label}</h1>
            <span>{props.list.details}</span>
            <div>
                <button className="buttonDelete" onClick={()=>{handleDelete(props.list.id)}}>delete</button>
            </div>
        </div>
            
        </>
    )
}