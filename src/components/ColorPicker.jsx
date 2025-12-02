import './ColorPicker.css';
import { useEffect, useState } from 'react';

function ColorPicker() {
    // const [count, setCount] = useState(0)
    const [color, setColor] = useState("black")
    
      // useEffect(()=>{
      //   document.title = `Count: ${count}`
      // }, [count]) 
    
        useEffect(()=>{
        console.log(`Color: ${color}`)
        document.title = `Color: ${color}`
      }, [color]) 
    return (
    <div className='container'>
            <div className="box" style={{
            background: color
        }}>

            {/* <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button> */}
        </div>
        
        <div className='buttons_container'>
            <button className='btn-green' onClick={()=> setColor("green")}>Green</button>
            <button className='btn-red' onClick={()=> setColor("red")}>Red</button>
            <button className='btn-blue' onClick={()=> setColor("blue")}>Blue</button>
        </div>
    </div>
    )
}

export default ColorPicker;