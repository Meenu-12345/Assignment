import { useState } from "react";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <b>Email</b>
        </label>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          value={loginData?.email}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div>
        <label>
          <b>Password</b>
        </label>
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={loginData?.password}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
