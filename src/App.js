import "./App.css";
import CardPage from "./components/CardPage";
import Input from "./components/Input";

function App() {
  return (
    <>
    <div className="container mt-4 d-flex justify-content-center align-items-center flex-column">
    <h3> Welcome to Weathermate &#128591;</h3>
      <Input/>
      <br />
      <CardPage/>
    </div>
    </>
  );
}

export default App;
