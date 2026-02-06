import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Posts from "./pages/Posts";
import CurrentPost from "./pages/CurrentPost";
import UTCTimeClock from "./components/UTCTimeClock";

function App() {
  const id = 31;
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to={`/post:${id}`}>CurrentPost</Link>
        <Link to="/utc-time">UTC Time</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path={`/post:${id}`} element={<CurrentPost id={id} />}></Route>
        <Route path="/utc-time" element={<UTCTimeClock />}></Route>
      </Routes>
    </div>
  );
}

export default App;
