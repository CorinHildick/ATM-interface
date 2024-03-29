const ATMDeposit = ({ onChange, isDeposit }) => {
	const choice = ['Deposit', 'Cash Back'];
	console.log(`ATM isDeposit: ${isDeposit}`);
	return (
	  <label className="label huge">
		<h3> {choice[Number(!isDeposit)]}</h3>
		<input id="number-input" type="number" width="200" onChange={onChange}></input>
		<input type="submit" width="200" value="Submit" id="submit-input"></input>
	  </label>
	);
  };
  
  const Account = () => {
	const [deposit, setDeposit] = React.useState(0);
	const [totalState, setTotalState] = React.useState(0);
	const [isDeposit, setIsDeposit] = React.useState(true);
  
	let status = `Account Balance $ ${totalState} `;
	console.log(`Account Rendered with isDeposit: ${isDeposit}`);
	const handleChange = (event) => {
	  console.log(`handleChange ${event.target.value}`);
	  setDeposit(Number(event.target.value));
	};
	const handleSubmit = (event) => {
	  let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
	  setTotalState(newTotal);
	  setValidTransaction(false);
	  event.preventDefault();
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<h2 id="total">{status}</h2>
		<button onClick={() => setIsDeposit(true)}>Deposit</button>
		<button onClick={() => setIsDeposit(false)}>Cash Back</button>
		<ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
	  </form>
	);
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  