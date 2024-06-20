// import React from 'react'
import '../styles/Card-small.css'
import PropTypes from 'prop-types';

function CardSmall({growth, pageViews, icon}) {
    return (
        <div className="card-small">
        <p className="card-small-views">page views</p>
        <p className="card-small-icon">
            <img src={icon} />
        </p>
        <p className="card-small-number">{pageViews}</p>
        <p className="card-small-percentage">
            <span>
                <img src="images/up.png"/>
                {growth}%
            </span>
         
        </p>
    </div>
    )
}
CardSmall.propTypes = {
    growth: PropTypes.number.isRequired,
    pageViews: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
};

export default CardSmall