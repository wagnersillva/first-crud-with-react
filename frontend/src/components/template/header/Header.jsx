import React from 'react'
import Logo from '../logo/Logo'
import './Header.css'


export default props =>
    <div className="header">
        <Logo />
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="users">Lista de usuários</a>
            </li>
        </ul>
    </div>
    