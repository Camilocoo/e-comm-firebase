import React from 'react'

const MenuItem = ({title,imageUrl}) => {
    return (
        <React.Fragment>
                 <div style={{backgroundImage:`url(${imageUrl})`}} className="menu-item">
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default MenuItem
