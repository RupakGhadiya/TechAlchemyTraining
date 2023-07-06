import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import './Menu.css'
import menuTab from '../IMG/Menu.png'

function Card({
    name,
    price,
    img
}) {
    return (

        <div className='menu'>
            <img src={img} alt='Image Not Found' />
            <div className='menuTitle'>
                <h1 className='path'>{name}</h1>
                <h1 className='price'>{price}</h1>
            </div>
        </div>


    );

}

function Menu() {

    const [menu, setMenu] = useState([]);

    const fetchRestorent = async () => {
        axios.get('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu')
            .then(response => {
                setMenu(response.data.menu);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchRestorent();
    }, [])


    return (
        <div>
            <img src={menuTab} className='menuTab'/>
            <h1 className='menuTitleMain'>Menu</h1>
            <div className='menucard'>
                {
                    menu.map((item) => {
                        return (
                            <Card
                                id={item.id}
                                name={item.itemName}
                                price={item.itemCost}
                                img={item.itemPhoto}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu