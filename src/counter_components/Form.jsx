
import {useState} from "react"

const Form = ({balance, setBalance}) => {
    // a state to manage amount input
    const [amount, setAmount] = useState("");

    function handle_withdraw(){
        if(amount > balance){
            alert("Oga insufficient balance")
            setAmount("");
            return;
        }
        setBalance(balance - amount) // calling a function that updates the balance
        setAmount("")
    }
  return (
    <div className='row pb-5'>
        <div className="col-md-2 offset-md-1  py-2">
           <button className="btn btn-warning" onClick={handle_withdraw} >Withdraw</button>
        </div>
        <div className="col-md-5  py-2">
            {/* this input will handle amount: amount to withdraw or amount to deposit */}
            <input type="number" className="form-control py-3"  value={amount}  onChange={
                function(e){
                    setAmount(e.target.value)
                }
            }/> 
        </div>

        <div className="col-md-2   py-2">
           <button className="btn btn-primary" onClick={
                function(){
                    setBalance(balance +  Number(amount)) // updating balance state
                    setAmount(""); // change the amount state to empty
                }
           }>Deposit</button>
        </div>
    </div>
  )
}

export default Form