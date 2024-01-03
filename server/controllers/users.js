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

module.exports = {
    signup
}