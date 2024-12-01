import { useState } from "react"

function Form() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[role,setRole] = useState("user")
    const[gender,setGender] = useState("male")
    const[rules,setRules] = useState(true)
    
    const loginHandler = ()=>{
        console.log({email , password , role , gender , rules})
       
    }
    const registerHandler = (event)=>{
        setEmail(event.target.value) 
    }
    const passwordHandler = (event)=>{  
        setPassword(event.target.value)}
    const selectHandler = (event)=>{ 
        setRole(event.target.value) 
       }

      const genderHandler = (event)=>{ 
        setGender(event.target.value) 
   
      }
      
      const rulesHandler = ()=>{ 
        console.log(rules)
        setRules(!rules) 
      }


  return (
    <div>
    <input type="text" 
    placeholder="Enter Email" 
    value={email} 
    onChange={registerHandler}/>
    <input type="password" 
    placeholder="Enter Password"
     onChange={passwordHandler} 
     value={password} />
     <select value={role} onChange={selectHandler}>
        <option value="Admin">Admin</option>
        <option value="user"> User</option>
        <option value="writer"> Writer</option>
     </select>
     <div>
     <label htmlFor="male">Male</label>
      <input type = "radio" name="gender" id="male" value="male" checked= {gender == "male"}  onChange ={genderHandler} />
      <label htmlFor="female">female</label>
      <input type = "radio" name="gender" id="female"  value="female" checked= {gender == "female"} onChange ={genderHandler} />
      <label htmlFor="other">Other</label>
      <input type = "radio" name="gender" id="other"  value="other" checked= {gender == "other"} onChange ={genderHandler} />
     </div>
     <input type="checkbox"checked={rules} onChange={rulesHandler}/>

      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Form
