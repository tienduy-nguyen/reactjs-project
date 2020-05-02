/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: true
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: true
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    },
    {
        name: 'Login',
        to: '/login',
        exact: true
    }
]


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    let active = match ? 'active' : '';
    return (

        <li className={`nav-item ${active}`}>
            <Link to={to} className='nav-link'>{label}</Link>
        </li>
    )
}

//ES6
class Nav extends Component {
    showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        label={menu.name}>
                    </MenuLink>
                )
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.showMenu(menus)}
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Nav;

