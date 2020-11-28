import React, { useState, useEffect } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import "./AdminView.css";

function AdminView() {
    
    const [usersData, setUsersData] = useState({});
    useEffect(()=>{
        getAllUsers();
    },[])

    function getAllUsers(){
        let endpoint = "/.netlify/functions/getUsers";

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
        {usersData && usersData.length > 0?  <div className="admin-view__user-data-wrapper"> {usersData.map((item,key)=> { return (
            <div key={key}> <UserInfo userData = {item} adminView={true}/></div>
        )
            })}
        </div> :
        <div>No users available</div>
    }
    </div>
  )
}

export default AdminView
