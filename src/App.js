import "./App.css";
import CardPage from "./components/CardPage";
import Input from "./components/Input";
import Nav from "./components/Nav";

function App() {
  return (
    <>
        <Nav/>
      <div className="container mt-3 d-flex justify-content-center align-items-center flex-column">
        {/* <h3> Welcome to Weathermate &#128591;</h3> */}
        <br />
        <Input />
        <br />
        <CardPage />
      </div>
    </>
  );
}

export default App;
