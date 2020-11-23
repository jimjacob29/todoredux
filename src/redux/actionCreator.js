import {ADD,DELETE} from "./actionConstants";
export const addToListActionCreator=()=>{
    return{
        type:ADD
    }
};

export const deleteListActionCreator=()=>{
    return{
        type:DELETE
    }
};