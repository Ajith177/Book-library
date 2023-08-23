// import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react';

const array=['#b6d5e1','green'];

function App() {
  const[bookname,setBookname]=useState("");
  const[author,setAuthorname]=useState("");
  const[complete,setComplete]=useState([]);
  const[color,setColor]=useState(false);

  

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
            <div className='main-task'>
            <li class="list" key={items.id}> Book:<strong>{items.value} </strong> was written by <br/> Author:<strong>{items.naming} </strong><button className="delete" value={color} onClick={()=>deleting(items.id)}>DELETE</button>  <button className='read'>READ</button> <button className='unread'>UNREAD</button></li>
            </div>
          )
        })
      }
     </ul>
    </div>
  );
}

export default App;
