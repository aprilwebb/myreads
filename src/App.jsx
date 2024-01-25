import { useState } from "react";
import Header from "./components/Header";
import Books from "./components/Books";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setName("");
    }
  }
  return (
    <>
      <div className="App">
        <Header />
        <Books />
        <div>
          {/* <form id="register" action="">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
}

export default App;
