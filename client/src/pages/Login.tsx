import React, { useState } from "react";
import { UserType } from "../types/types";

const Login = () => {

    const [ values, setValues ] = useState<UserType>(
        {
            username: '',
            password: '',
        }
    );

    const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {

        const name = e.target.name;
        const value = e.target.value;

        setValues( ( prev ) => ( { ...prev, [ name ]: value } ) )

    }

    return (
        <div className="wrapper signup-wrapper">
            <form>

                <div className="title-wrapper">
                    <p> Login Form  </p>
                </div>

                <div className="inputs-wrapper">

                    <div className="label-wrapper">

                        <label htmlFor="username">
                            <p> Username </p>
                            <input type="text" id="username" name="username" onChange={ controlledInputs } placeholder="Username..." value={ values?.username } />
                        </label>

                        <label htmlFor="password">
                            <p> Password </p>
                            <div className="password-wrapper">
                                <input type="text" id="password" name="password" onChange={ controlledInputs } placeholder="Password..." value={ values?.password } />
                                <button type="button" className="show-password"> show </button>
                            </div>
                        </label>

                    </div>

                </div>

                <div className="buttons-wrapper">
                    <button type="button"> Login </button>
                </div>

            </form>
        </div>
    )

}

export default Login;