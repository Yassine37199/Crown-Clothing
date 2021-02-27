import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'



class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    
    handleChange = e => {
        const {value , name} = e.target;
        console.log(value + ' ' + name);
        this.setState({
            [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }

    render(){

        return(
            <div className="sign-in">
                <h2 className="title"> Already have an account ?</h2>
                <span className="title"> Sign in with Email and Password</span>

                <form onSubmit={this.handleSubmit} >

                    <FormInput
                        name="email" 
                        value={this.state.email} 
                        type="email" required 
                        handleChange={this.handleChange} 
                        label="Email"
                        />

                    <FormInput 
                    name="password" 
                    value={this.state.password} 
                    type="password" 
                    required  
                    handleChange={this.handleChange} 
                    label="Password"
                    /> 

                    <div className="button-wrapper">
                        <CustomButton type="submit" value="Submit Form"> Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} GoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div> 
        )
    }
}

export default SignIn