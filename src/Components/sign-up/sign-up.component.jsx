import React, { Component } from 'react'
import {auth , createUserProfile} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'


import './sign-up.styles.scss'






class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPass : ''

        }
    }

    handleChange = e => {
        const {value , name} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName , email , password , confirmPass} = this.state;
        if (password !== confirmPass) {
            alert("Password don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            await createUserProfile(user , {displayName});
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPass : ''
                
            })
        }
        catch (error) {
            alert(error.message)

        }
       
    }

    render(){
        const {displayName , email , password , confirmPass} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form  onSubmit={this.handleSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />

                     <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />

                     <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />

                     <FormInput
                        type="password"
                        name="confirmPass"
                        value={confirmPass}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <div className="button-wrapper">
                       <CustomButton type="submit" value="Submit Form"> Sign Up </CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp