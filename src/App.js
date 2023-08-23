import "./App.css";
import CardPage from "./components/CardPage";
import Input from "./components/Input";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="container mt-3 d-flex justify-content-center align-items-center flex-column">
        <br />
        <Input />
        <br />
        <CardPage />
      </div>
    </>
  );
}

export default App;
