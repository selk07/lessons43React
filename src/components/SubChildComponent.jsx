import React, {  } from "react";
import { UserInfo } from "../App";
import '../App.css';


function SubChildComponent(props) {
   const userData = React.useContext(UserInfo);
   return (
     <div className="sub-Component">
       <h3>Sub Child Component</h3>
       <p className="info">User Name: {userData.name}</p>
       <p className="info">User Age: {userData.age}</p>
       <p className="info">User ID: {userData.id}</p>
     </div>
   );
 }
 export default SubChildComponent