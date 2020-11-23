
import React from "react";
import { Switch,Route } from 'react-router-dom';

import Home from "./components/home";
import './App.css';
import Input from './components/input';

function App() {
  // const[lists,setList]= React.useState([])
  // let history = useHistory();

  // const handleSave=(data)=>{
  //   const obj={};
  //   const length = lists.length;
  //   if(length===0){
  //     obj["id"]=1;
  //   }
  //   else{
  //     obj["id"]=lists[length-1].id+1;
  //   }
    
  //   obj["label"] = data.label;
  //   obj["details"] = data.details;
  //   const tempList =[...lists];
  //   tempList.push(obj);
  //   setList(tempList);
  //   console.log(tempList);
  //   history.push("/");

  // }

  // const handleDelete=(id)=>{
  //   const tempList = lists.filter((list)=>list.id!==id);
  //   setList(tempList);
  // }

  
  
  return (
    <>
      <Switch>
        <Route path ="/input" component={Input}/>
        <Route path ="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;

