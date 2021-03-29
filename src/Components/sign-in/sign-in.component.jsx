import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils'

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
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email , password } = this.state;
     
        try {
            await auth.signInWithEmailAndPassword(email , password);
            this.setState({
                email : '',
                password : ''
            })
        }
        catch (error) {
            alert(error.message);
        }
        
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
                        type="email" 
                        required 
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
                        <CustomButton type="button" onClick={SignInWithGoogle} GoogleSignIn> Sign In With Google</CustomButton>
                    </div> 
                </form>
            </div> 
        )
    }
}

export default SignIn