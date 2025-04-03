import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = e.target;
    const formData = new FormData(inputData);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    navigate("/main");
  };

  return (
    <div className="logincontainer">
      <div className="logincard">
        <img style={{ width: 100, opacity: 0.3 }} src="/users.png" alt="" />

        <form onSubmit={handleSubmit}>
          <Input name="userName" placeholder="username" icon="user" />
          <Input name="password" placeholder="password" icon="password" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
