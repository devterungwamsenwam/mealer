
const Header = ({balance}) => {
  return (
    <div className='row py-5'>
        <div className="col-md-8 offset-md-2 text-center py-2">
            <h1>Bank App</h1>
            <p>Your Balance: <span className="badge bg-primary">{balance}</span></p>
        </div>
    </div>
  )
}

export default Header