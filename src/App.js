import React,{useState,useEffect} from 'react';
import './mobile.css';
import Data from './data'

const App = () => {
  const[people,setPeople]=useState(Data)
 
  
  return (
    <div className='bg'>
     <div className='mob'> 
     <div className='top'><h2>{people.length} Birthday's Today</h2></div>
     {people.map((x)=>{
        return(
          <section className='list' key={x.id}>
           <img src={x.image}></img>
            <div className='name'><h3>{x.name}</h3>
            <p>{x.age}</p> </div>
          </section>
        )
      })}
          
      <button className='Button' onClick={()=>setPeople([])}>Clear</button></div>
    </div>
  )
}
export default App
