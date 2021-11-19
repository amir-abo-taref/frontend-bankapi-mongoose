import React, { useEffect, useState } from "react";
import axios from "axios";
import "./showallusers.css"

const ShowAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loding,setLoading] = useState(false);

  useEffect(() => {(async () => {
      setLoading(true);
       await axios.get("http://localhost:5001/").then((res) => {
        setAllUsers(res.data.users);
        setLoading(false);
      });

    })();
  }, []);

  return (
    <div className="userscontainer">
        {console.log(allUsers)}
      {!loding&&allUsers.map((e) => {
        return (
          <div className="cards" key={e.id}>
            <div >name:{e.name}</div>
            <div>email:{e.email}</div>
            <div>password:{e.password}</div>
            <div>cash:{e.cash}</div>
            <div>credit:{e.credit}</div>
            <div>acountid:{e.acountId}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllUsers;
