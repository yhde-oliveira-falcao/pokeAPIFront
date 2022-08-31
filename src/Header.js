import React, { Component }  from 'react';


const Header = () => {
    const headerStyle = {
        backgroundColor: '#5DB9FF', 
        color: '#fff'
    }


    return (
        <header style={headerStyle}>
            <h1>Pokemon Selector</h1>
        </header>
    )
}

export default Header