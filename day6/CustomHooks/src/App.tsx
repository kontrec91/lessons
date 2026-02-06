import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useForm from "./hooks/useForm";
import type { errorsType, initialValuesType } from "./types/types";

function App() {
  const [count, setCount] = useState(0);

  const { posts, error, isLoading } = useFetch();

  const [name, setName] = useLocalStorage("userName", "Ivan");

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values: initialValuesType) => {
    // const errors = { email: "", password: "" };
    const errors: errorsType = {};

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      errors.email = "Invalid email!";
    }

    if (!values.password) {
      errors.password = "Passsword is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters long!";
    }

    return { errors };
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    initialValues,
    validate
  );

  const onSubmit = (data: initialValuesType) => {
    console.log("Форма валидна:", data);
    alert("Вход выполнен!");
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        useFetch:
        <div>{isLoading && <p>Loading...</p>}</div>
        <div>{posts && <p>{posts.body}</p>}</div>
        <div>{error && <p>Error: {error}</p>}</div>
      </div>

      <div>
        useLocalStorage
        <div>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <p>Привет, {name}!</p>
        </div>
      </div>

      <form
        className="clientForm"
        onSubmit={(event) => handleSubmit(onSubmit, event)}
        noValidate
      >
        {/* write block schema how to work? */}
        <div>useForm</div>
        <label htmlFor="email">
          Login:{" "}
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            // required
          />
        </label>
        {errors.email && <div>{errors.email}</div>}
        <label htmlFor="password">
          Password:{" "}
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            // required
          />
        </label>
        {errors.password && <div>{errors.password}</div>}
        <button type="submit">Submit</button>
        <button>Reset</button>
      </form>
    </>
  );
}

export default App;
