import { Outlet } from "react-router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <ToastContainer />
    </>
  );
}

export default App;
