import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                            {/* hoặc activeStyle để thêm style nếu click. activeStyle="{{backgroundColor:blue;}}"*/}
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/demousestate">Demo UseState</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/demouseeffect">Demo UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='bg-dark' className="nav-link" to="/chonxe">Chon Xe</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    )
}
