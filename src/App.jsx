import React, { useState } from 'react';
import TodoList from './TodoList';

const App=() =>{
const [inlist, setlist] = useState("");
const [Item, setitem] = useState([]);
const cal = (event) => {
  setlist(event.target.value);
};
const List = () =>{
  setitem((oditem) =>{
    return [...oditem, inlist];
  });
  setlist("");
};

const Delete=(id) =>{
  setitem((oditem) => {
    return oditem.filter((ar, index)=>{
      return index!==id;
    });
  });
};
let ob = new Date().getHours();
let x='';
if(ob>=1 && ob<12)
{
   x="Good Morning!";
}
else if(ob>=12 && ob<19)
{
  x="Good Afternoon!";
}
else{
  x="Good Night!";
}

  return (
   <>

   <div className="start">
     <div className="main">
     <h3 className="greet">{x} </h3> <br/> <br/>
     <h3 className="plan"> What's your plan for today ? </h3> <br/>  <br/>
      <h2>   <i className="fa fa-check" aria-hidden="true"/>   To Do List&nbsp;&nbsp;</h2>
       <br/>
       <input type="text" placeholder="Add a Task" value = {inlist} onChange={cal}/>
       <button onClick={List}> + </button>
    <ol>
      {Item.map(function(val, index){
     
     return (<TodoList key={index} 
     id={index} 
     text={val}
     onSelect={Delete}
     />
     );
      })}
    </ol>
     </div>
   </div>
   </>
  );
};
export default App;
