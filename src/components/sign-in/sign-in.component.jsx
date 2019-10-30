import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogleMethod,auth} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
import { async } from 'q';

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error)
        }

        
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>i already have an account</h2>
                <span>Sing in with your password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogleMethod} isGoogleSignIn>Sign in with google</CustomButton>    
                    </div>
                </form>
            </div>
        )
    }
}

