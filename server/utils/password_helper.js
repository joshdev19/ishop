const hashed = require('bcryptjs');

const password_hash = ( password ) => {

    const salt = hashed.genSaltSync();
    const password_Hashed = hashed.hashSync(password, salt);
    return password_Hashed;

}

const comapare_password = ( password, password_hashed ) => {

    return hashed.compareSync( password, password_hashed );

}

module.exports = {
    password_hash,
    comapare_password
}