import {ADD,DELETE} from "./actionConstants";

const initState={
    lists:[]
};

export default function Reducer(state=initState,action){
    switch(action.type){
        case ADD:{
            const obj={};
            const length = state.lists.length;
            if(length===0){
                obj["id"]=1;
            }
            else{
                obj["id"]=state.lists[length-1].id+1;
            }
            obj["label"] = action.payload.label;
            obj["details"] = action.payload.details;
            const tempList =[...state.lists];
            tempList.push(obj);
            return {
                lists : tempList
            }
        }
        case DELETE:{
            const tempList = state.lists.filter((list)=>list.id!==action.payload.id);
            return{
                lists:tempList
            }

        }
        default:
            return state;
    }
}