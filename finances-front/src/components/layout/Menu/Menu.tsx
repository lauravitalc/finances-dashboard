import React from 'react';
import Card from '../../ui/Card';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full pt-6">
            <Card>
                <ul className="menu menu-horizontal menu-lg">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "menu-active" : "")}>Dashboard</NavLink>
                    </li>
                    <li><NavLink
                        to="/transactions"
                        className={({ isActive }) => (isActive ? "menu-active" : "")}>Transactions</NavLink></li>
                    <li><NavLink
                        to="/categories"
                        className={({ isActive }) => (isActive ? "menu-active" : "")}>Categories</NavLink></li>
                </ul>
            </Card>
        </div>
    )
}

export default Menu;