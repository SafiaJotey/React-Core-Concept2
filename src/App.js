import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
    <ExternalUser></ExternalUser>
    </div>
);
}
function ExternalUser(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return(
    <div>
      {
      users.map(user=><LoadData  name={user.name} email={user.email}></LoadData>)
     }
    </div>
  )
}
function LoadData(props){
  return(
    <div className="loadData">
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}


/*
function Counter(){
 
  const [count,setCount]=useState(0);
  const handleIncrease=()=>setCount(count+1);
  const handleDecrease=()=>setCount(count-1);
    
  return(
    <div>
      <h2>Count:{count} </h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}

function Counter(){
  const[count,setCount]=useState(50);
  const handleIncrease=()=>setCount(count+1);
  const  handleDecrease=()=>setCount(count-1);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}*/
/* 
*/
export default App;
