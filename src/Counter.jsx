import Form from "./counter_components/Form"
import Header from "./counter_components/Header"
import {useState} from "react" // we want to manage a state on this component so we import useState

const Counter = () => {
    //assume we sent a request to an api and it fetches the balance from database and returned it to us
    // var balance = 5000;  // if you have anything that can change in your application DO NOT STORE INSIDE A VARIABLE|CONSTANT: USE STATE
    // balance should be kept inside state: hook
    const [balance, setBalance]  = useState(0);// assume that zero is coming from database initially
  return (
    <div className="container">
        {/* other components will be listed in this place */}
        {/* conditional rendering using ternary operator */}
        {
            balance > 5000 ? 
            <p className="alert alert-success">Odogwu, You are doing well</p>
            :
            <p className="alert alert-warning">Oga work harder, You are going broke</p>
        }
        <Header  balance = {balance} />
        <Form  balance = {balance}   setBalance={setBalance}/>
        
    </div>
  )
}

export default Counter