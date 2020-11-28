import React, { useState, useEffect } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import "./AdminView.css";

function AdminView() {
    
    const [usersData, setUsersData] = useState({});
    useEffect(()=>{
        getAllUsers();
    },[])

    function getAllUsers(){
        let endpoint = "/api/getUsers";

        fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => {
            if (data) {
                setUsersData(data);
                console.log(data)
            } 
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }


    return (
    <div className="admin-view">
        {usersData && usersData.length > 0?  <ul> {usersData.map((item,key)=> { return (
            <li key={key}> <UserInfo userData = {item} adminView={true}/></li>
        )
            })}
        </ul> :
        <div>No users available</div>
    }
    </div>
  )
}

export default AdminView
