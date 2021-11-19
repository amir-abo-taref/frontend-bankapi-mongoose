// import React,{useState,useRef} from 'react'
// import axios from 'axios'

// const AddCash=()=>{
//     const ref=useRef()

// const [addCash,setAddCash]=useState({
//     acountId:'',
//      amount:'',
//     })
    
//     const inputHandler = (e)=>{
//         ref.current.innerHTML=""
//         setAddCash({
//         ...addCash,
//         [e.target.id]:e.target.value,
//     })
//     console.log(addCash)
//     }

// const Depositing=()=>{
//     if(addCash.acountId>0){
//         axios.put(`http://localhost:8080/Depositing`,addCash).then(ref.current.innerHTML="").catch((err)=>{
//             console.log(err);
//         })
//         ref.current.innerHTML="cash add is successful"
// }
// else{ref.current.innerHTML="not active user"}
// }
//  return(
//      <div className="Depositing">
//     <li>acountId</li>
//     <li><input type="number" value={addCash.acountId} onChange={inputHandler} placeholder="Enter your acountId" /></li>
//     <li>amount</li>
//     <li><input type="number"   value={addCash.amount} onChange={inputHandler} placeholder="Enter your amount value" /></li>
//     <li><input type="button" className="btn" value="add amount" onClick={Depositing}/></li>
//     <li><div className="refmsg" ref={ref} /></li>  
//     </div>
//  );

//  }
//  export default AddCash;