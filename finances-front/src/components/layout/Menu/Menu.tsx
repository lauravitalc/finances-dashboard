import React from 'react';

const Menu: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full pt-6">
            <div className="card">
                <ul className="menu menu-horizontal menu-lg">
                    <li><a className="menu-active">Dashboard</a></li>
                    <li><a>Transações</a></li>
                    <li><a>Categorias</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;