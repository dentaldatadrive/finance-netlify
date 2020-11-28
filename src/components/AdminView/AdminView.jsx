import React, { useState, useEffect } from 'react';
import "./AdminView.css";

function AdminView(props) {
    
    function handleLogout(){
        props.logout("")
    }
        
    return (
    <div className="admin-view">
        Admin View
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminView
