import React,{useState,useRef} from 'react'
import axios from 'axios'
const Transferring=()=>{
const ref=useRef()
const [user,setUser]=useState({
acountId:'',
acountId2:'',
credit:'',
amount:''
})


const inputHandler = (e)=>{
    ref.current.innerHTML=""
setUser({
    ...user,
    [e.target.id]:e.target.value,
})
}
const Transferringtwousers=()=>{
    if(user.acountId>0){
        axios.put(`https://backend-bankapi-mongos.herokuapp.com/api/users/Transferring`,user).then(ref.current.innerHTML="").catch((err)=>{
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
    <li><input type="number" min="0" name="acountId" id="acountId" value={user.acountId} onChange={inputHandler} placeholder="Enter your acountId" /></li>
    <li><input type="number" min="0" name="acountId2" id="acountId2" value={user.acountId2} onChange={inputHandler} placeholder="Enter your acountId" /></li>
    <li><input type="number" min="0" name="amount" id="amount" value={user.amount} onChange={inputHandler} placeholder="enter amount" /></li>
    <li><input type="submit" className="btn" value="send cash" onClick={Transferringtwousers}/></li>
    <li><div className="refmsg" ref={ref} /></li>
</ul>
    </div>
);

}
export default Transferring;