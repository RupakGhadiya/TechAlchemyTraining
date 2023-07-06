import React, { useEffect, useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FaPepperHot} from 'react-icons/fa'
import './Home.css'
import baked from '../Sidebars/IMG/BurgerKing.svg'
import Catogary from '../Sidebars/Comp/Catogary'


function HomeNavBtn(props) {
  return (
    <button className='HomeNavBtn'>
      {props.icon}
    </button>
  );
}

function RestorentCatogary(props) {
  return (
    <button className='catogarybtn'>
      <span className='catogaryImg'>{props.catogaryImg}</span>
      {props.catogaryName}
    </button>
  );

}

function Home() {
  return (
    <div className='homepage'>
      <div className='home_nav'>
        <HomeNavBtn
          icon={<BsChevronLeft />}
        />
        <div className='home_nav2'>
          <input type="text" placeholder="Search for Restaurants  (Press Enter to search)" className='home_searchbar' />
          <HomeNavBtn
            icon={<HiOutlineBars3BottomRight />}
          />
          <button className='HomeNavBtn2'>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>

      <h1 className='home_category'>Category</h1>

      <div className='category'>
        <RestorentCatogary
          catogaryImg={<FaPepperHot/>}
          catogaryName='Baked'
        />

        <RestorentCatogary
          catogaryImg={<FaPepperHot/>}
          catogaryName='Sweet'
        />

        <RestorentCatogary
          catogaryImg={<FaPepperHot/>}
          catogaryName='Hot Dish'
        />

        <RestorentCatogary
          catogaryImg={<FaPepperHot/>}
          catogaryName='Fast Foods'
        />

        <RestorentCatogary
          catogaryImg={<FaPepperHot/>}
          catogaryName='Salads'
        />

      </div>
      <Catogary />
    </div>
  )
}

export default Home