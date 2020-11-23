import React from "react";
import { Link } from "react-router-dom";
import Display from "./display";
import {useSelector} from 'react-redux';

const selectLists = state=> state.lists;

export default function Home(props){
    const lists = useSelector(selectLists);
    return(
        <div className="App">
                <Link to ="/input">
                    <button className="buttonAdd">Add</button>
                </Link>
            {lists.map((list)=>(
                 <Display key={list.id} list={list}/>
            ))}
        </div>
    );
}