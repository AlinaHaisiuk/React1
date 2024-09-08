import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const onInputChange = () => {
    console.log("test");
  };
  const onButtonClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Input placeholder={"Test input"} onChange={onInputChange} />
      <Button onClick={onButtonClick} text={"Button test"} />
    </div>
  );
}

export default App;
