// import React from 'react'
import '../styles/card.css'
import PropTypes from 'prop-types';



function Card({userName,followers,todayFollowers, icon, name}) {
    const cardClass = `card ${name}`
    return (
        <article className={cardClass}>
            <p className="card-title">
                <img src= {icon}/>
                {userName}
            </p>
            <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/up.png"/>
                {todayFollowers} today
            </p>
        </article>
    )
}

Card.propTypes = {
    userName: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    todayFollowers: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card;