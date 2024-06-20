// import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: '@Zuckerberg',
        followers: '117,092,86',
        todayFollowers:78526,
        icon: "images/facebook.png",
        name: 'facebook'
    },
    {
        userName: '@elonmusk',
        followers:'281,874,540',
        todayFollowers:29850,
        icon: "images/twitter.png",
        name: 'twitter'


    },
    {
        userName: '@Ronaldo',
        followers:'467,158,897',
        todayFollowers:39580,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
    {
        userName: '@Pewdiepie',
        followers:'112,456,789',
        todayFollowers:-59270,
        icon: "images/youtube.png",
        name: 'youtube'


    },
]

function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList