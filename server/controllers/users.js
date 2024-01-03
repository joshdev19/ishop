const { connect } = require("../database/database");
const { randomUUID } = require('crypto');
const { password_hash, comapare_password } = require('../utils/password_helper');

const signup = ( request, response ) => {

    const user_id = randomUUID();

    const { username, firstname, lastname, number, password, confirm_password } = request.body;

    console.log(request.body)
    console.log(password === confirm_password)

    if ( !username && !firstname && !lastname && !number && !password && !confirm_password ) return response.status(400).send(
        {
            message: "Fields are required"
        }
    )

    if ( !username ) return response.status(400).send(
        {
            message: "Username is required"
        }
    )

    if ( !firstname ) return response.status(400).send(
        {
            message: "Firstname is required"
        }
    )

    if ( !lastname ) return response.status(400).send(
        {
            message: "Lastname is required"
        }
    )

    if ( !password ) return response.status(400).send(
        {
            message: "Password is required"
        }
    )

    if ( !confirm_password ) return response.status(400).send(
        {
            message: "Confirm password is required"
        }
    )

    if ( password !== confirm_password ) return response.status(400).send(
        {
            message: "Password must be match"
        }
    )

    const newPassword = password_hash( password );

    const stmt = "insert into ishop_users ( user_id, username, firstname, lastname, email, number, address, password ) values ( ?, ?, ?, ?, ?, ?, ?, ? )";

    connect().query( stmt, [ user_id, username, firstname, lastname, '', number, '', newPassword ], ( err, result ) => {

        if ( err ) return response.status(400).send(
            {
                message: "An error occured. Please try again"
            }
        )

        response.status(200).send(
            {
                message: "Registered Successfully"
            }
        )

    });

    connect().end( err => {

        if ( err ) console.log( err )

    })

}

const login = ( request, response ) => {

    const { username, password } = request.body;

    if ( !username && !password ) return response.status(400).send(
        {
            message: "Fields are required"
        }
    )

    if ( !username ) return response.status(400).send(
        {
            message: "Username is required"
        }
    )

    if ( !password ) return response.status(400).send(
        {
            message: "Password is required"
        }
    )

    const stmt = "select ishop_users.password from ishop_users where username = ?";

    connect().query( stmt, [ username ], ( err, result ) => {

        if ( err ) return response.status(400).send(
            {
                message: "An error occured. Please try again"
            }
        )

        if ( !result.length ) return response.status(400).send(
            {
                message: "Wrong Credential"
            }
        )
        
        const isValid = comapare_password( password, result[0]?.password );
        
        if ( !isValid ) return response.status(400).send(
            {
                message: "Wrong Credential"
            }
        )
        
        response.status(200).send(
            {
                message: "Logged In Successfully"
            }
        )
        
    })

}

const userAnthenticating = ( request, response ) => {

    const { user_id, username } = request.body;

    if ( !user_id && username ) return response.status(401).send(
        {
            message: "Unauthorized"
        }
    )

    if ( !user_id ) return response.status(401).send(
        {
            message: "Unauthorized"
        }
    )

    if ( !username ) return response.status(401).send(
        {
            message: "Unauthorized"
        }
    )

    const stmt = "select * from ishop_sessions where user_id = ? and username = ?";

    connect().query( stmt, [ user_id, username ], ( err, result ) => {

        if ( err ) return response.status(400).send(
            {
                message: "An error occured. Please try again"
            }
        )

        if ( !result.length ) return response.status(403).send(
            {
                message: "Forbidden: This user is no longer exist" // or wrong username
            }
        )

        response.status(200).send(
            {
                message: "Authorized"
            }
        )

    })

    connect().end( err => {

        if ( err ) console.log(err);

    })

}

module.exports = {
    signup,
    login,
    userAnthenticating
}