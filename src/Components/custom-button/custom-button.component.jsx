import React from 'react'
import './custom-button.styles.scss'




const CustomButton = ({children , GoogleSignIn ,  ...OtherButtonProps}) => (
    <button className={`${GoogleSignIn ? 'GoogleSignIn' : ''} custom-button`} {...OtherButtonProps}>
        {children}
    </button>
)

export default CustomButton