import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebars/Sidebar'
import axios from "axios"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
import { useParams } from 'react-router-dom';
import './RestDetails.css'
import HomeNavBtn from './Home'
import Resto from '../Sidebars/IMG/Resto.png'
import Menu from '../Sidebars/Comp/Menu'

function RestDetails(props) {
    window.scroll(0, 0)
    const { id } = useParams();

    const [data, setData] = useState({})
    console.log("rest data", data)
    const getRestDetails = async () => {

        axios.get('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails')
            .then(response => {
                response.data.restaurantDetails.map((item) => {

                    if (item.id == id) {

                        setData(item)
                        return
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        getRestDetails();
    }, [])

    return (
        <div className='restDetails'>
            <Sidebar />

            <div className='restDetailsHeader'>
                <div className='restDetailsTitle'>
                    <h1>{data.restaurantName}</h1>
                    <p>{data.restaurantDescription}</p>
                    <div className='restTime'>
                        <span><AiOutlineClockCircle /></span>
                        <div>
                            <h2>{
                                data.openingHours
                            }
                            </h2>

                        </div>
                    </div>
                    <div className='restPhone'>
                        <span><BsTelephoneFill /></span>
                        <h1>{data.contactNumber}</h1>
                    </div>
                    <div className='restPhone'>
                        <span><TbWorldWww /></span>
                        <h1>{data.websiteUrl}</h1>
                    </div>
                </div>
                <div className='restDetailsImg'>
                    <img src={data.restaurantImage} />

                </div>
            </div>

            <Menu />
        </div>
    )
}

export default RestDetails