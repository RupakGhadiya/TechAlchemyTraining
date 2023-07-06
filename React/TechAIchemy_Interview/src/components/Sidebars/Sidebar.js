import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './IMG/logo.png'
import card from './IMG/card.png'
import { AiOutlineHome } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { AiOutlineSetting } from 'react-icons/ai'
import './Sidebar.css'

function SidebarData(props) {
  return (
    <div>
      <Link to={props.path} className='sidebarlink'>
        <div className='sidebaricon'>
        {props.icon}
        </div>
        <span className='sidebartitle'>{props.title}</span>
      </Link>
    </div>
  );
}



function Sidebar() {

  return (
    <div>
      <div className='sidebar'>
        <div className='logo'>
          <img src={logo} />
          <h3>Pomo & co</h3>
        </div>

        <nav className='nav_menu'>
          <ul className='Nav_menu_items'>
            <li className='nav_link'>
              <SidebarData
                path="/home"
                icon={<AiOutlineHome />}
                title='Home'
              />
            </li>
            <li className='nav_link'>
              <SidebarData
                path="/orders"
                icon={<TiDocumentText />}
                title='Orders'
              />
            </li>
            <li className='nav_link'>
              <SidebarData
                path="/notifiction"
                icon={<AiOutlineMail />}
                title='Notification'
              />
            </li>
            <li className='nav_link'>
              <SidebarData
                path="/help"
                icon={<FiHelpCircle />}
                title='Help & Support'
              />
            </li>
            <li className='nav_link'>
              <SidebarData
                path="/settings"
                icon={<AiOutlineSetting />}
                title='Settings'
              />
            </li>

          </ul>
        </nav>
        <div className='sidebarcard'>
          <img src={card} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar