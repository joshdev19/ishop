const { connect } = require("../database/database");

const addCart = ( request, response ) => {

    const { user_id, username } = request.headers['custom-header'];
    const { id, title, description, price, iaage } = request.body;

    continue this tomorow, add if !user_id  blah blah

    then inset carts

}

const getCarts = ( request, response ) => {

    const { id } = request.params;

    if ( !id ) return response.status(401).send(
        {
            message: "Failed to get carts. Invalid ID"
        }
    )

    const stmt = "select ishop_carts.cart_id, ishop_carts.cart_title, ishop_carts.cart_description, ishop_carts.cart_price, ishop_carts.cart_image from ishop_users inner join ishop_carts on ishop_users.user_id = ishop_carts.user_id where ishop_users.user_id = ?";

    connect().query( stmt, [ id ], ( err, result ) => {

        if ( err ) return response.status(400).send(
            {
                message: "An error occured. Please try again",
                err
            }
        )

        if ( !result.length ) return response.status(200).send(
            {
                result
            }
        )

        response.status(200).send(
            {
                result
            }
        )

    })

    connect().end( err => {

        if ( err ) console.log(err);

    })

}

module.exports = {
    addCart,
    getCarts
}