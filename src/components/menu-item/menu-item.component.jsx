import React from 'react'

const MenuItem = ({title,subtitle}) => {
    return (
        <React.Fragment>
                 <div className="menu-item">
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default MenuItem
