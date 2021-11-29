import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  const greeting = 'Hello Function Component!';

  return (
  
    <header className="App-header">
            
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
            }}
            >
          <Link to="/">Debriefing</Link>  |  <Link to="/response">Participant Response</Link>
             
        
          
  
         
        </nav>

    </header>

  )
}

export default Navigation;