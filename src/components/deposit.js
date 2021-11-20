import React,{useState,useRef} from 'react'
import axios from 'axios'
const amount=0;
const Deposting=()=>{
const ref=useRef()
const [user,setUser]=useState({
acountId:'',
cash:0,
amount:parseInt(amount)
})


const inputHandler = (e)=>{
    ref.current.innerHTML=''
setUser({
    ...user,
    [e.target.id]:e.target.value,
})
}
const insertcash=()=>{
    if(user.acountId>0){
        axios.put(`https://frontend-bankapi-mongos.herokuapp.com/api/users/updateMoney`,user).then(ref.current.innerHTML='').catch((err)=>{
            console.log(err);
            ref.current.innerHTML="credit cants be updated"
        })
        ref.current.innerHTML="credit update is successful"
}
else{ref.current.innerHTML="enter valid values"}
}
return (
    <div className="userstaple">
<ul>
    <li>acountId</li>
    <li><input type="number" min="0"  id="acountId" value={user.acountId} onChange={inputHandler} placeholder="Enter your acountId" /></li>
    <li><input type="number" min="0" id="amount" value={user.amount} onChange={inputHandler} placeholder="enter amount" /></li>
    <li><input type="submit" className="btn" value="insert cash" onClick={insertcash}/></li>
    <li><div className="refmsg" ref={ref} /></li>
</ul>
    </div>
);

}
export default Deposting;