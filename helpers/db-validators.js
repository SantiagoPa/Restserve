const Rol = require('../models/rol');
const User = require('../models/user');

const isRolValid = async (rol= '') => {

    const existsRol = await Rol.findOne({ rol });
    if (!existsRol) {
        throw new Error(`the rol: ${rol}, is invalid`)
    }
}

const isEmailExists = async (email = '')=>{

    const exitsEmail = await User.findOne({ email });
    if (exitsEmail) {
        throw new Error(`the email: ${email}, it already exists`)
    }
}

const isUserByIdExists = async (id)=>{

    const existsUserById = await User.findById(id);
    if (!existsUserById) {
        throw new Error(`the id: ${id}, not exists`)
    }
}


module.exports = {
    isRolValid,
    isEmailExists,
    isUserByIdExists,
}