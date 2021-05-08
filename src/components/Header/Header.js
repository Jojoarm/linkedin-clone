import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import avatar from '../../images/avatar.jpeg'

const Header = () => {
    return (
        <div className='header'>
           <div className='header__left'>
                <img src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1620401582~hmac=3750be1dd1058252835ebadfedaa8546' alt='linkedin' />
                <div className='header__search'>
                    <Search className='searchicon' />
                    <input type='text' placeholder='Search' />
                </div>
           </div>
           <div className='header__right'>
                <HeaderOption Icon={Home} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenter} title='Jobs' />
                <HeaderOption Icon={Chat} title='Messaging' />
                <HeaderOption Icon={Notifications} title='Notifications' />
                <HeaderOption avatar={avatar} title='Me' />
           </div>
        </div>
    )
}

export default Header
