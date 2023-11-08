import "./App.css";
import ConditionalDisplay from "./components/ConditionalDisplay";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import List from "./components/List";
import LoginForm from "./components/LoginForm";

const sampleData = [
  { name: "Coffee", id: 1 },
  { name: "Tea", id: 2 },
  { name: "Milk", id: 3 },
];
function App() {
  return (
    <>
      <Greeting name={"Meenu"} />
      <ConditionalDisplay />
      <Counter />
      <List listElements={sampleData} />
      <LoginForm />
    </>
  );
}

export default App;
