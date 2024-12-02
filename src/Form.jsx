import { useState } from "react"

function Form() {
    const [form, setForm] = useState({
      email: "",
      password: "",
      role: "user",
      gender: "male",
      rules: true,
    })
    const changeHandler = (event) => {
      const name=event.target.name
      const value =event.target.value
      if(name =="rules"){
        setForm((form) =>({...form , rules:!form.rules}))

      }else{
        setForm(form =>({...form, [name]:value}))

      }
      console.log(event.target.name)

    }
    const submitHandler = (event)=>{
      event.preventDefault()
        console.log(form)
    }
    
  return (
<form onSubmit={submitHandler}>
    <div>
    <input type="text" 
    placeholder="Enter Email" 
    name="email"
    value={form.email} 
    onChange={changeHandler}/>


    <input type="password" 
    placeholder="Enter Password"
    name="password"
     onChange={changeHandler} 
     value={form.password} />


     <select value={form.role} onChange={changeHandler} name="role">
        <option value="Admin">Admin</option>
        <option value="user"> User</option>
        <option value="writer"> Writer</option>
     </select>
     <div>
     <label htmlFor="male">Male</label>
      <input type = "radio" name="gender" id="male" value="male" onChange={changeHandler} checked= {form.gender == "male"} />
      <label htmlFor="female">female</label>
      <input type = "radio" name="gender" id="female"  value="female" onChange={changeHandler} checked= {form.gender == "female"} />
      <label htmlFor="other">Other</label>
      <input type = "radio" name="gender" id="other"  value="other" onChange={changeHandler} checked= {form.gender == "other"} />
     </div>
     <input type="checkbox"checked={form.rules} name="rules" onChange={changeHandler}/>

      <button type="submit">Login</button>
    </div>
    </form>
  )
}

export default Form
