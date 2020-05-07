import React from 'react'
import { Link } from 'react-router-dom'
class NavComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">home page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign' className="nav-link">sign page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">login page</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavComponent