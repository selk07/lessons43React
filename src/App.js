import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import './App.css';


export const UserInfo = React.createContext({});

function App () {
  const [userDetails] = useState({
    name: "Alex",
    age: 30,
    id:1
  });

  return (
    <div className="parent-component">
    <UserInfo.Provider value={userDetails}>
      <h1>Parent Components</h1>
      <ChildComponent userDetails={userDetails} />
    </UserInfo.Provider>
    </div>
  );
}
export default App;


