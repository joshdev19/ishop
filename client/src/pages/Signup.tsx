import React, { useState } from "react";
import { UserType } from "../types/types";
import axios from "axios";

const Signup = () => {

    const [ values, setValues ] = useState<UserType>(
        {
            username: '',
            firstname: '',
            lastname: '',
            number: 0,
            password: '',
            confirm_password: '',
        }
    );

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name = e.target.name;
        const value = e.target.value;

        setValues( ( prev ) => ( { ...prev, [ name ]: value } ) )

    }

    const signupHandler = async () => {

        try {
            
            const request = await axios.post('/signup', values);

            const response = await request.data;
            
            console.log(response)

        } catch (error) {
            
            console.log(error)

        }

    }

    return (
        <div className="wrapper signup-wrapper">
            <form>

                <div className="title-wrapper">
                    <p> Signup Form  </p>
                </div>

                <div className="inputs-wrapper">

                    <div className="label-wrapper">

                        <label htmlFor="username">
                            <p> Username </p>
                            <input type="text" id="username" name="username" onChange={ controlledInputs } placeholder="Username..." value={ values?.username } />
                        </label>

                        <label htmlFor="firstname">
                            <p> firstname </p>
                            <input type="text" id="firstname" name="firstname" onChange={ controlledInputs } placeholder="firstname..." value={ values?.firstname } />
                        </label>

                        <label htmlFor="lastname">
                            <p> lastname </p>
                            <input type="text" id="lastname" name="lastname" onChange={ controlledInputs } placeholder="lastname..." value={ values?.lastname } />
                        </label>

                        <label htmlFor="number">
                            <p> Number </p>
                            <input type="text" id="number" name="number" onChange={ controlledInputs } placeholder="Number..." value={ values?.number } />
                        </label>

                        <label htmlFor="password">
                            <p> Password </p>
                            <div className="password-wrapper">
                                <input type="text" id="password" name="password" onChange={ controlledInputs } placeholder="Password..." value={ values?.password } />
                                <button type="button" className="show-password"> show </button>
                            </div>
                        </label>

                        <label htmlFor="confirm_password">
                            <p> Confirm Password </p>
                            <input type="text" id="confirm_password" name="confirm_password" onChange={ controlledInputs } placeholder="Confirm Password ..." value={ values?.confirm_password } />
                        </label>

                    </div>

                </div>

                <div className="buttons-wrapper">
                    <button type="button" onClick={ signupHandler }> Signup </button>
                </div>

            </form>
        </div>
    )

}

export default Signup;