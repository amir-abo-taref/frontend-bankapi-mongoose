import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './showallusers.css';

const ShowAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        ( async() =>{
            await axios.get('https://frontend-bankapi-mongos.herokuapp.com/api/users').then(res =>{
                setAllUsers(res.data)
            })
        } )()
 
    }, [])


 
    return (
        <div>
        <div className="container">
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>AcountId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Credit</th>
                        <th>Money</th>
                        <th>Password</th>
                    </tr>
                    {allUsers.map((e) => {
                        return (
                            <tr key={e._id}>
                                <td className="burdocolor">{e.acountId}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.credit}</td>
                                <td>{e.cash}</td>
                                <td>{e.password}</td>
                                <td>
                                    {/* <input
                                        className="button-three"
                                        type="button"
                                        onClick={() => {
                                            deleteHandler(e.id);
                                        }}
                                        value="Delete"
                                    /> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <br/>
        <br/>
    </div>
    )
}

export default ShowAllUsers ;
