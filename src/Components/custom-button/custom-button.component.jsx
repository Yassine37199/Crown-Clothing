import React from 'react'
import './custom-button.styles.scss'




const CustomButton = ({children , ...OtherButtonProps}) => (
    <button className="custom-button" {...OtherButtonProps}>
        {children}
    </button>
)

export default CustomButton