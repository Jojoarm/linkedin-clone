import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle('JoJo Armani will rise again!', 'Top news - 999 readers')}
            {newsArticle('Corona Virus: Nigeria Updates!', 'Health - 886 readers')}
            {newsArticle('Tuchel Magic! Chelsea topples City', 'Football - 789 readers')}
            {newsArticle('Rodgers fumbles at the finish Line again!', 'Football - 759 readers')}
            {newsArticle('Undirected Rocket to hit some cities!', 'Environment - 700 readers')}
            {newsArticle('Dev Armani Winning!', 'Top news - 609 readers')}
        </div>
    )
}

export default Widgets
