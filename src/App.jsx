import "./App.css";
import { InputArea } from "./components/InputArea";
import { Navbar } from "./components/Navbar";
import { Preview } from "./components/Preview";
import { ProfileDetails } from "./components/ProfileDetails";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section>
        <Preview></Preview>
        <InputArea></InputArea>
        <ProfileDetails></ProfileDetails>
      </section>
    </div>
  );
}

export default App;
