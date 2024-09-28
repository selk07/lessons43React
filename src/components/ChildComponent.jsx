
import SubChildComponent from "../components/SubChildComponent";
import '../App.css';

function ChildComponent(props) {
   return (
     <div className="child-Component">
       <h2>Child Component</h2>
       <SubChildComponent />
     </div>
   );
 }
 export default ChildComponent