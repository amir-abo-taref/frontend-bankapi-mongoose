import React,{useState,useRef} from 'react'
import axios from 'axios'
import "./addusers.css"

const AddUsers=()=>{
const ref=useRef()

const [user,setUser]=useState({
name:'',
email:'',
password:'',
cash:'0',
credit:'0',
acountId:''
})


const inputHandler = (e)=>{
    ref.current.innerHTML=""
setUser({
    ...user,
    [e.target.id]:e.target.value,
})
console.log(user)
}


const addNewUser=()=>{
    if(user.name.length>1&&user.credit>=0&&user.cash>=0){
        axios.post(`https://backend-bankapi-mongos.herokuapp.com/api/users`,user).then(ref.current.innerHTML="").catch((err)=>{
            console.log(err);
            ref.current.innerHTML="user is already exist"
        })
        ref.current.innerHTML="user add is successful"
}
else{ref.current.innerHTML="enter valid values"}
}
return (
    <div className="userstaple">
<ul>
    <li>name</li>
    <li><input type="text" name="name" id="name" value={user.name} onChange={inputHandler} placeholder="Enter user name" /></li>
    <li>email</li>
    <li><input type="email" name="email" id="email" value={user.email} onChange={inputHandler} placeholder="Enter your email" /></li>
    <li>password</li>
    <li><input type="password" name="password" id="password" value={user.password} onChange={inputHandler} placeholder="Enter your password" /></li>
    <li>cash</li>
    <li><input type="number" min="0" name="cash" id="cash" value={user.cash} onChange={inputHandler} placeholder="Enter your amount of cash" /></li>
    <li>credit</li>
    <li><input type="number" min="0"  name="credit" id="credit" value={user.credit} onChange={inputHandler} placeholder="Enter your amount of credit" /></li>
    <li>acountId</li>
    <li><input type="number" min="0" name="acountId" id="acountId" value={user.acountId} onChange={inputHandler} placeholder="Enter your acountId" /></li>
    <li><input type="button" className="btn" value="Add user" onClick={addNewUser}/></li>
    <li><div className="refmsg" ref={ref} /></li>
</ul>
    </div>
);

}

export default AddUsers;