
import { Form,Button} from "react-bootstrap";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function Home(){
  
const [startDate,setStartDate] =useState(new Date())
const [title, setTitle]=useState('')
const [options,setOptions] =useState('')
const [lists, setLists]=useState([])

const onsubitform=(e)=>{
e.preventDefault()


const newlists= {title,options,startDate}
setLists([...lists, newlists])
setTitle('')
setOptions('')
setStartDate('')



}

const deletebtn=(index)=>{
    const removelist =[...lists]
    removelist.splice(index,1)
    setLists(removelist)
}
  
    return(
        <div>
        <div className="flex content-center justify-center m-4">
         

         <Form className="flex gap-4"  onSubmit={onsubitform}>

      <div className="w-96 h-80 border-4">
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="Pp"
      placeholderText="Select a date"
    />
      </div>
        
        
        
        <label className="m-4 ">
            <p className="border-2">Title</p> <input 
            type='text' 
            name='input'
            placeholder="search"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          
            
            className="border-2"
         />
        </label>
        <div className="border  "> 
        <label >Progress :</label>
        <select value={options}  onChange={(e)=>setOptions(e.target.value)}>
          <option value="">choose a task</option>
         <option value='done' >done</option>
         <option value="not-started">not-started</option>
         <option value="in-progress">in-progress</option>
        
         </select>
         
            
    
        
         </div>

         
      <button type='Submit' className="w-24 h-24 bg-indigo-500 m-2">submit</button>
      
        </Form>
        </div>
        <h1>TO DO LIST</h1>
         <div className="grid ">
            {console.log(lists)}
            { lists.map((item, index)=>{
                
                return(
                    <div key={index} className="grid grid-cols-4 m-4">
                        <p>{item.title}</p>
                        <p>
                        {item.options === "done" && (
                      <div style={{ backgroundColor: "green" }}>done</div>
                                            )}
                        {item.options === "in-progress" && (
                  <div style={{ backgroundColor: "blue" }}>In Progress</div>
                           )}
                      {item.options === "not-started" && (
                  <div style={{ backgroundColor: "red" }}>not-started</div>
                           )}
         
                        </p>
                        <p className="m-2">{`${item.startDate}`}</p>
                        <Button type="submit" className="bg-dark " onClick={()=>deletebtn(index)}>delete</Button>
                    </div>
                )
            })}
           
         </div>
        </div>
    )
}