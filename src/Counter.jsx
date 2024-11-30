import {useState} from 'react'
 
const Counter= ()=> {
  const [counter,setCounter] = useState(0);
 const stopHandler=()=>{
    setCounter("-")
  }
  return (
    <div>
    <h1>Counter</h1>
    <p>{counter}</p>
    <button onClick={()=> setCounter(counter + 1)}>Increment</button>
    <button onClick={counter=> counter + 1}>Increment+3</button>
    <button onClick={stopHandler}>Stop</button>
      
    </div>
  )
}

export default Counter

