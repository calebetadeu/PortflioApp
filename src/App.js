
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Partcles from "react-particles-js"

function App() {
  return (
    <>
    <Partcles className="particles-canvas"
    params={{
      
      particles:{
        number:{
          value:30,
          density:{
            enabled:true,
            value_area:900
          }
        },
        shape:{
          type:"square",
          stoke:{
           width:6,
           color:"#E03616"
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
  
  </>
  );
}

export default App;
