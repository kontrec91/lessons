import { useEffect, useReducer } from "react";
import "./App.css";

interface errorType {
  email: string | null;
  password: string | null;
}

interface actionType {
  type: string;
  payload: string | null;
}

interface stateType {
  email: string | null;
  password: string | null;
  error: errorType;
}

const actionType = {
  email: "type_email",
  password: "type_password",
  emailError: "email_error",
  passwordError: "password_error",
};

const initState: stateType = {
  email: "",
  password: "",
  error: { email: null, password: null },
};

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "type_email":
      return {
        ...state,
        email: action.payload,
      };
    case "type_password":
      return {
        ...state,
        password: action.payload,
      };
    case "email_error":
      return {
        ...state,
        error: { ...state.error, email: action.payload },
      };

    case "password_error":
      return {
        ...state,
        error: { ...state.error, password: action.payload },
      };
    default:
      return state;
  }
};

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState<errorType>({
  //   email: "",
  //   password: "",
  // });

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    console.log("state", state);
  }, [state, state.error]);

  const handleValidation = () => {
    const { email, password } = state;
    console.log("ERRORS", state.error);
    if (email && !email.includes("@")) {
      // setError((prev) => ({ ...prev, email: "invalid email" }));
      dispatch({ type: actionType.emailError, payload: "invalid email" });
    }
    if (!password) {
      // if (!"".length) {
      // setError((prev) => ({ ...prev, password: "password is too short" }));
      dispatch({
        type: actionType.passwordError,
        payload: "password is too short",
      });
    }
    if (password && password.length && email && email.includes("@")) {
      console.log("email", email);
      console.log("password", password);
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleValidation();
  };
  return (
    <form className="form" onSubmit={(event) => handleSubmitForm(event)}>
      {/* onSubmit ловит и клик, и Enter. */}
      <label htmlFor="email">
        Email{" "}
        <input
          id="email"
          type="email"
          value={state.email as string}
          required
          onChange={(event) => {
            // setEmail(event.target.value);
            // if (error.email) setError((prev) => ({ ...prev, email: null })); // ← сброс при исправлении значения
            dispatch({
              type: actionType.email,
              payload: event.target.value,
            });
            if (state.error.email)
              dispatch({ type: actionType.emailError, payload: null });
          }}
        />
      </label>
      {/* {error.email && <div className="error">{error.email}</div>} */}
      {state.error.email && <div className="error">{state.error.email}</div>}

      <label htmlFor="password">
        Password{" "}
        <input
          id="password"
          type="password"
          value={state.password as string}
          onChange={(event) => {
            // setPassword(event.target.value);
            // setError((prev) => ({ ...prev, password: null }));
            dispatch({
              type: actionType.password,
              payload: event.target.value,
            });
            if (state.error.password)
              dispatch({ type: actionType.passwordError, payload: null });
          }}
        />
      </label>
      {/* {error.password && <div className="error">{error.password}</div>} */}
      {state.error.password && (
        <div className="error">{state.error.password}</div>
      )}
      <button className="submit" type="submit">
        Send
      </button>
    </form>
  );
}

export default App;
