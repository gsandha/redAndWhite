 import "./App.css";
// import NavBar from "./components/Navbar";
import { Signup } from "./components/Signup";


 import { Login } from "./components/Login";
// import NavBar from "./components/Navbar";
// // import JoinRoom from "./JoinRoom";
// function App() {
  
// return(
//   <div>
//     <NavBar/>
//   <Login/>
//   <Signup/>
//   </div>
// )

// }

// export default App;
import React, { useState } from 'react';


function App() {
  const [active, setActive] = useState('login');

  const handleNavClick = (link) => {
    setActive(link);
  };

  return (
    <div>
      <NavBar active={active} handleNavClick={handleNavClick} />
      {active === 'login' ? <Login /> : <Signup />}
    </div>
  );
}

function NavBar({ active, handleNavClick }) {
  const handleClick = (e, link) => {
    e.preventDefault();
    handleNavClick(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={(e) => handleClick(e, 'login')}>
            {active === 'login' ? 'Login (active)' : 'Login'}
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleClick(e, 'signup')}>
            {active === 'signup' ? 'Signup (active)' : 'Signup'}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
