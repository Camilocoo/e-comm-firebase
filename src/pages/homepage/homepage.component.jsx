import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
    return (
        <React.Fragment>
            <div className="homepage">
            <Directory/>
            </div>
        </React.Fragment>
    )
}

export default HomePage


