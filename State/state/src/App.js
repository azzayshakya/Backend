import logo from './logo.svg';
import './App.css'
import MyUseStateComponent from "./Component/UseStateHook";
import UseEffectHook from './Component/UseEffectHook';
import PasswordGenrator from './Component/PasswordGenrator';
function App() {
  
  return (
    <div className="App">
     {/* <MyUseStateComponent/> */}
     {/* <UseEffectHook/> */}
     <PasswordGenrator/>
    </div>
  );
}

export default App;
