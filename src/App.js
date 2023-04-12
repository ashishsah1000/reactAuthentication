import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Login, Signup } from "./components";
import { Routes, Route } from "react-router-dom";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
