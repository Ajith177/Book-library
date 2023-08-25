// import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react';

const array=['#b6d5e1','green'];

function App() 
{
  const[bookname,setBookname]=useState("");
  const[author,setAuthorname]=useState("");
  const[complete,setComplete]=useState([]);
  const[color,setColor]=useState();
  const[total,setTotal]=useState(0);
  const [change,setChange]=useState();

  function add_task(){
    if(!bookname || !author){
      alert("Please fill out the empty fields")
    }
    else{
      const task={
        id:Math.floor(Math.random()*100),
        value:bookname,
        naming:author
      }
      setComplete([...complete,task])
      setAuthorname("");
      setBookname("");
      console.log(complete);
    }
  }

  function handleclick(){
    setColor(!color)
  }

  function handleevent(){
    setTotal(total+1)
    setChange(!change)
    
  }

  function deleting(id){
    const del=complete.filter((values)=>values.id!==id);
    setComplete(del);
  }

  return (
    <div className="App" style={{textAlign:'-webkit-center'}}>
     <h3>BOOK-LIBRARY</h3>
     <div className="complete">
     <label className="book-name">BOOK-NAME:</label>
     <input type="text" placeholder="Enter the book title" value={bookname} onChange={(e)=>setBookname(e.target.value)} className="book-box" autoFocus/><br/><br/>
     <label class="author-name">AUTHOR-NAME:</label>
     <input type="text" placeholder="Enter the Author name"  value={author} onChange={(e)=>setAuthorname(e.target.value)}className="author-box" autoFocus/><br/><br/>
     <input type="submit" className="submit" onClick={()=>add_task()}/>
     </div>

     <ul>
      {
        complete.map((items)=>{
          return(
            <div className='main-task' style={{backgroundColor:color?"lightseagreen":"white"}} >
            <li class="list" key={items.id}><strong>{items.value} 
            </strong> was written by<strong>{items.naming} </strong>
            <button className="delete" onClick={()=>deleting(items.id)}>DELETE</button>  
            <button className='read' onClick={handleclick} >READ</button> 
            <button className='unread' onClick={handleevent} style={{backgroundColor:change?"lightseagreen":"#0e5f76"}}>UNREAD</button></li>
            <br/>

            <p className='paragraph'>The number of books added in library:{complete.length}</p>
            <p className='para-1'>The total number of tabs unread by you:{total}</p>
            </div>
          )
        })
      }
     </ul>
    </div>
  );
}

export default App;
