import React from 'react'

import './form-input.styles.scss'





const FormInput = ({label , handleChange , ...OtherInputProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...OtherInputProps} />
        {
            label?
            (
                <label className={`${OtherInputProps.value? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )
            :null

        }
    </div>
)

export default FormInput
