import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children,isGoogleSingIn ,...otherProps}) => {
    return (
        <div className={`${isGoogleSingIn?"google-sign-in":''} custom-button`} {...otherProps}>
            {children}
        </div>
    )
}

export default CustomButton
