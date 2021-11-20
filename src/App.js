import './App.css';
import AddUsers from "./components/addusers";
import ShowAllUsers from "./components/showAllUsers";
import UpdateCridit from "./components/updateCredit"
import Deposting from "./components/deposit"
import WithDrawMoney from "./components/withDrawMoney"
import Transferring from "./components/Transferring"

function App() {
  return (
    <div className="App">
      <AddUsers/>
      <ShowAllUsers/>
      <UpdateCridit/>
      <Deposting/>
      <WithDrawMoney/>
      <Transferring/>
    </div>
  );
}

export default App;
