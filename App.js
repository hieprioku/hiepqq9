import React,{Component} from "react";
import "./App.css";

class App extends Component {
  render() {
    const courseArr =["REACT","JAVACRIP","PYTHON"]
    return (
      <div>
        <h2>DANH DÁCH KHÓA HỌC</h2>
        <ul>
          {courseArr.map((element,index)=>(
            <li key = {index}>{element}</li>
          ))}
        </ul>
      </div>
      
    );
  }
};
export default App;