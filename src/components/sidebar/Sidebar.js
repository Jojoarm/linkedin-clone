import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Sidebar.css'

const Sidebar = () => {
     const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebar__recentItems'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>

    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,540</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>1,440</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('programing')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
