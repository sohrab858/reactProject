import {useState} from 'react'
 
const Counter= ()=> {
  const [counter,setCounter] = useState(0);
  const[isShow,setIsShow] = useState(true);
 const stopHandler=()=>{
    setCounter("-")
  }

  const showHandler = ()=>{
    setIsShow(true)}

  const hideHandler = ()=>{
    setIsShow(false)}
    const Increment3 = ()=>{
      setCounter( counter=> counter + 1)
      setCounter( counter=> counter + 1)
      setCounter( counter=> counter + 1)
    }
  return (
    <>
    <button onClick={showHandler}>show</button>
    <button onClick={hideHandler}>hide</button>
    {isShow && (   <div>
    <h1>Counter</h1>
    <p>{counter}</p>
    <button onClick={()=> setCounter(counter + 1)}>Increment</button>
    <button onClick={Increment3}>Increment+3</button>
    <button onClick={stopHandler}>Stop</button>
      
    </div>)
   
    }

    </>
  )
}

export default Counter

