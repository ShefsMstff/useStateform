import { useState } from "react"

function Form(){
    const [name , useName]=useState('');
    const [email , useEmail]=useState('');
    const [message , useMessage]=useState('');
   
    const handleNameChange=(e)=>useName(e.target.value)
    const handleEmailChange=(e)=>useEmail(e.target.value);
    const handleMessageChange=(e)=>useMessage(e.target.value); 
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
}
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label><h3>Name</h3></label>
            <input type="text" value={name} onChange={handleNameChange}/>
            
            </div>

           <div>
           <label><h3>Email</h3></label>
           <input type="email" value={email} onChange={handleEmailChange}/>
           </div>
              
             <div>
             <label><h3>Message </h3></label>
             <textarea value={message} onChange={handleMessageChange}/>
             </div>
               
                <button type="submit"><h4>Submit</h4></button>

        </form>
    )
    
}
export default Form;