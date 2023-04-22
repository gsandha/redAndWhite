import React from 'react';

function NavBar() {
  const SignOut=()=>{
    localStorage.clear()
  }
  
  return (
    <nav>
      <ul>
        <li><a href="./Login">Login</a></li>
        <li><a href="./Signup">Register</a></li>
        {/* <li onClick={()=>SignOut()}>SignOut</li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
