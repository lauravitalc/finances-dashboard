import React from 'react';
import Card from '../../ui/Card/card';

const Menu: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full pt-6">
            <Card variant="menu">
                <ul className="menu menu-horizontal menu-lg">
                    <li><a className="menu-active">Dashboard</a></li>
                    <li><a>Transações</a></li>
                    <li><a>Categorias</a></li>
                </ul>
            </Card>
        </div>
    )
}

export default Menu;