import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
const User = (props) => {
  const { name } = useParams();
  return <h1>Profile-{name}</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <ul style={{ backgroundColor: "orange"}}>
          <li>
            <Link to="/user/Bob">Bob</Link>
          </li>
          <li>
            <Link to="/user/Alice">Alice</Link>
          </li>
        </ul>

        <div style={{ backgroundColor: "yellow", padding: 20 }}>
          <Routes>
            <Route path="/user/:name" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
