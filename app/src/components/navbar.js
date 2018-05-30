import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar bg-success  nav-expand-sm">
                <a class="navbar-brand">Company Name</a>
                <ul class="navbar nav">
                    <li class="nav-item"><a class="nav-link">Home</a></li>
                    <li class="nav-item"><a class="nav-link">About</a></li>
                    <li class="nav-item"><a class="nav-link">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;