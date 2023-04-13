import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Login, Signup } from "./components";
import { Routes, Route } from "react-router-dom";
import Logout from "./components/logout/Logout";
import { useEffect } from "react";
import { getUser } from "./localStorage/user";
import { useNavigate } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // const user = getUser();
    // if (user == null) {
    //   navigate("/login");
    // } else {
    //   navigate("/home");
    // }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
