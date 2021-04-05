import React from 'react'
import './custom-button.styles.scss'




const CustomButton = ({children , GoogleSignIn , inverted , ...OtherButtonProps}) => (
    <button className={`${inverted ? 'inverted ' : ''} ${GoogleSignIn ? 'GoogleSignIn' : ''} custom-button`} {...OtherButtonProps}>
        {children}
    </button>
)

export default CustomButton