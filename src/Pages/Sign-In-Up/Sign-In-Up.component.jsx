import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

import './Sign-In-Up.styles.scss'






const SignInUp = () => (
    <div className="sign-in-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUp