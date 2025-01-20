import type { ChangeEvent } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../services/auth";
import type { UserLogin } from "./Login";

function LoginPage() {
  const navigate = useNavigate();

  const notify = () => toast.success("Vous êtes connecté !");
  const error = () => toast.error("Impossible de se connecter !");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as UserLogin;

    const response = await login(data);

    if (response) {
      notify();

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      error();
    }
  };

  return (
    <main className="create-video-game">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="password">password</label>
        <input type="text" id="password" name="password" />

        <button type="submit">Valider</button>
      </form>

      <ToastContainer />
    </main>
  );
}

export default LoginPage;
