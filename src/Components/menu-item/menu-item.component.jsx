import React from 'react'
import './menu-item.styles.scss'


const MenuItem = ({name}) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{name.toUpperCase()}</h1>
            <span className="subtitle">DISCOVER NOW</span>
        </div>
    </div>
)

export default MenuItem