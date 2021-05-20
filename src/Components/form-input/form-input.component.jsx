import React from 'react'
import { FormGroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles'





const FormInput = ({label , handleChange , ...props}) => (
    <FormGroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {
            label?
            (
                <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>
            )
            :null

        }
    </FormGroupContainer>
)

export default FormInput
