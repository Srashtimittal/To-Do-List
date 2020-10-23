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
if(ob>=12 && ob<12)
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
<h3 className="greet">Hello Sir, {x} </h3>
   <div className="start">
     <div className="main">
       <br/>
       <i className="fa fa-check" aria-hidden="true"/> <h1> To Do List</h1>
       <br/>
       <input type="text" placeholder="Add Items" value = {inlist} onChange={cal}/>
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
