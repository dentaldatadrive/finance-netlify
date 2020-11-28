import React, { useState, useEffect } from 'react';
import "./UserInfo.css";

function UserInfo(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userReadOnlyOne, setUserReadOnlyOne] = useState("");
    const [userReadOnlyTwo, setUserReadOnlyTwo] = useState("");
    const [userReadOnlyThree, setUserReadOnlyThree] = useState("");
    const [adminOnlyOne, setAdminOnlyOne] = useState("");
    const [adminOnlyTwo, setAdminOnlyTwo] = useState("");
    const [adminOnlyThree, setAdminOnlyThree] = useState("");


    const [formEditable, setFormEditable] = useState(false);

    const [adminView, setAdminView] = useState();

    useEffect(setDefaultValuesForProps, [props]);    

    function setDefaultValuesForProps(){
        setFirstname(props.userData.firstname);
        setLastname(props.userData.lastname);
        setEmail(props.userData.email);
        setPassword(props.userData.password);
        setAdminView(props.adminView);
        if (props.adminView) {
            setUserReadOnlyOne(props.userData.userReadOnlyOne);
            setUserReadOnlyTwo(props.userData.userReadOnlyTwo);
            setUserReadOnlyThree(props.userData.userReadOnlyThree);
            setAdminOnlyOne(props.userData.adminAccessOnlyOne);
            setAdminOnlyTwo(props.userData.adminAccessOnlyTwo)
            setAdminOnlyThree(props.userData.adminAccessOnlyThree)
        }
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
        let endpoint = "/.netlify/functions/userUpdateUser";
        let payload = {
            firstname: firstname, 
            lastname:lastname, 
            email:email, 
            password: password, 
            _id: props.userData._id
        };

        if(adminView) {
            endpoint = "/.netlify/functions/adminUpdateUser";
            payload.userReadOnlyOne = userReadOnlyOne;
            payload.userReadOnlyTwo = userReadOnlyTwo;
            payload.userReadOnlyThree = userReadOnlyThree;
            payload.adminAccessOnlyOne = adminOnlyOne;
            payload.adminAccessOnlyTwo = adminOnlyTwo;
            payload.adminAccessOnlyThree = adminOnlyThree;
        }

        fetch(endpoint, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
          .then(()=>setFormEditable(false))
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    function renderRestrictedContent() {
        if (!adminView) {
            return (
            <div> 
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
            </div>
            )
        } else {
            return (
            <div>
                <div className="login__input-wrapper">
                    <label>Read Only Attribute 1:</label>
                    <input onChange={(e)=>setUserReadOnlyOne(e.target.value)} type="text" name="read-only-one" id="read-only-one" value={userReadOnlyOne || ""} disabled={!formEditable}/>
                </div>
                <div className="login__input-wrapper">
                    <label>Read Only Attribute 2:</label>
                    <input onChange={(e)=>setUserReadOnlyTwo(e.target.value)} type="text" name="read-only-two" id="read-only-one" value={userReadOnlyTwo || ""} disabled={!formEditable}/>
                </div>
                <div className="login__input-wrapper">
                    <label>Read Only Attribute 3:</label>
                    <input onChange={(e)=>setUserReadOnlyThree(e.target.value)} type="text" name="read-only-three" id="read-only-three" value={userReadOnlyThree || ""} disabled={!formEditable}/>
                </div>
                <div className="login__input-wrapper">
                    <label>Admin Only Attribute 1:</label>
                    <input onChange={(e)=>setAdminOnlyOne(e.target.value)} type="text" name="admin-only-one" id="admin-only-one" value={adminOnlyOne || ""} disabled={!formEditable}/>
                </div>  
                <div className="login__input-wrapper">
                    <label>Admin Only Attribute 2:</label>
                    <input onChange={(e)=>setAdminOnlyTwo(e.target.value)} type="text" name="admin-only-two" id="admin-only-two" value={adminOnlyTwo || ""} disabled={!formEditable}/>
                </div> 
                <div className="login__input-wrapper">
                    <label>Admin Only Attribute 3:</label>
                    <input onChange={(e)=>setAdminOnlyThree(e.target.value)} type="text" name="admin-only-three" id="admin-only-three" value={adminOnlyThree || ""} disabled={!formEditable}/>
                </div>           
            </div>
            )
        }
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
            {renderRestrictedContent()}

            <button onClick={toggleFormEdit}>{formEditable? "Cancel" : "Edit"}</button>
            {formEditable && <button onClick={updateUserInfo}>Submit</button>}
        </form>
    </div>
)
}

export default UserInfo
