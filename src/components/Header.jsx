// import React from 'react'
import '../styles/header.css'
import PropTypes from 'prop-types';

function Header({children}) {
    return (
        <header className="header" >
     <div className="wrapper">
      <div className="header-grid">
        <div>
          <h1>Social Media Dashboard</h1>
          <p className="header-total">Total Followers: 23, 004</p>
        </div>
        {children}
      </div>
     </div>
   </header>
    )
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Header