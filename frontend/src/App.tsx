import TransactionsList from "./components/TransactionsList";
import AddTransactionForm from "./components/AddTransactionForm";

function App() {
  return(
    <div style={{padding: "20px"}}>
      <h1>Finance Tracker</h1>
      <AddTransactionForm/>
      <TransactionsList/>
    </div>
  );
}

export default App
