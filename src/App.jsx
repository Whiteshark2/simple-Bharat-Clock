import React,{useState,useEffect} from 'react'
import './App.css'
const App = () => {
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    const intervalId=setInterval(() => {
      setTime(new Date())
    }, 1000);

    return ()=>{
      clearInterval(intervalId)
    }
  },[])
  
  return (
    <div className='main'>
      <h1>Bharat Clock</h1>
      <p>{time.toDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default App




