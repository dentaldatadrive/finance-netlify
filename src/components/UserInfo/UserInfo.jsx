import React, { useState, useEffect } from 'react';
import "./UserInfo.css";

function UserInfo(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formEditable, setFormEditable] = useState(false);

    useEffect(() => {
        setDefaultValuesForProps();
    },[props]);    

    function setDefaultValuesForProps(){
        setFirstname(props.userData.firstname);
        setLastname(props.userData.lastname);
        setEmail(props.userData.email);
        setPassword(props.userData.password);
    }
      
    function toggleFormEdit(e) {
        e.preventDefault();
        setFormEditable(!formEditable);

        if(formEditable) {
            setDefaultValuesForProps()
        }
    }

    function updateUserInfo(e) {
        e.preventDefault();
        let endpoint = "/api/userUpdateUser";

        fetch(endpoint, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname, 
                lastname:lastname, 
                email:email, 
                password: password, 
                _id: props.userData._id
            }),
          })
          .then(()=>setFormEditable(false))
          .catch((error) => {
            console.error('Error:', error);
          });
    }

return (
    <div className="user-info">
        <form>
            <div className="login__input-wrapper">
                <label htmlFor="user">Firstname:</label>
                <input onChange={(e)=>setFirstname(e.target.value)} type="text" name="username" value={firstname || ""} id="username" disabled={!formEditable}/>
            </div>
            <div className="login__input-wrapper">
                <label htmlFor="admin">Lastname:</label>
                <input onChange={(e)=>setLastname(e.target.value)} type="text" name="lastname" id="lastname" value={lastname || ""} disabled={!formEditable}/>
            </div>
            <div className="login__input-wrapper">
                <label>Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" value={email || ""} disabled={!formEditable}/>
            </div>
            <div className="login__input-wrapper">
                <label>Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" value={password || ""} disabled={!formEditable}/>
            </div>
            <div className="login__input-wrapper">
                <span>Read Only Attribute 1:</span>
                <span>{props.userData.userReadOnlyOne}</span>
            </div>
            <div className="login__input-wrapper">
                <span>Read Only Attribute 2:</span>
                <span>{props.userData.userReadOnlyTwo}</span>
            </div>
            <div className="login__input-wrapper">
                <span>Read Only Attribute 3:</span>
                <span>{props.userData.userReadOnlyThree}</span>
            </div>
            <button onClick={toggleFormEdit}>{formEditable? "Cancel" : "Edit"}</button>
            {formEditable && <button onClick={updateUserInfo}>Submit</button>}
        </form>
    </div>
)
}

export default UserInfo
