type SignupType = {
    api: string;

}
type ValuesType = {
    values: object;
}

type ActionType = {
    type: "SIGNUP" | "LOGIN";
    payload: SignupType | ValuesType
}

type ParamType<T> = {
    api: string;
    values: T[]
}

const signUpFunc = () => {
// watch the useQuerty by nikita dev
}

type StateType = {
    signup: ( api: string, values: [] ) => {

    }
}

const reducer = ( states: StateType, action: ActionType ) => {

    switch( action.type ) {

        case "SIGNUP":
            // return { ...states, { states.signup( action.payload, action.payload ) } }

    }

}